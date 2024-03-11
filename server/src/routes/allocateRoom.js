import { Router } from 'express';
import RegisterStudent from '../database/schemas/studentsForRoomAllocation.js';
import User from '../database/schemas/user.js';

const router = Router();

router.post('/registerforroom', async (req, res) => {
    try {
        const { student1RollNo, student2RollNo, student3RollNo } = req.body;
        const roomNo = '';

        const rollNos = [student1RollNo, student2RollNo, student3RollNo];

        const groupId = rollNos.map(rollNo => rollNo).join(' ');
        const newGroup = new RegisterStudent({
            rollNos,
            groupId,
            roomNo
        });

        await newGroup.save();
        res.status(200).json({ message: 'Registration for room successful', groupId });
    } catch (error) {
        console.error('Error registering for room:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
});

router.get('/registerforroom', async (req, res) => {
    try {
        const groups = await RegisterStudent.find({});

        res.status(200).json({groups});
    }catch(error){
        console.log(error)
        res.status(500).send({ msg: "Internal Server Error" });
    }
})

router.put('/allocateroom', async (req, res) => {
    try {
        const { groupId, selectedRooms } = req.body;

        const groupIdArray = Array.isArray(groupId) ? groupId : [groupId];

        const selectedRoomsArray = Array.isArray(selectedRooms) ? selectedRooms : [selectedRooms];

        const roomAllocations = {};
        groupIdArray.forEach((group, index) => {
            roomAllocations[group] = selectedRoomsArray[index % selectedRoomsArray.length];
        });

        await RegisterStudent.updateMany({ groupId: { $in: groupIdArray } }, { $set: { roomNo: roomAllocations[groupId] } });

        const allRegisteredStudents = await RegisterStudent.find({ groupId: { $in: groupIdArray } });

        const rollNoRoomMap = {};

        allRegisteredStudents.forEach((doc) => {
            const rollNos = doc.groupId.split(' ');

            rollNos.forEach((rollNo) => {
                const [block, roomNumber] = roomAllocations[doc.groupId].match(/^([a-zA-Z]+)([0-9]+)$/).slice(1);

                rollNoRoomMap[rollNo] = { block, roomNo: parseInt(roomNumber) };
            });
        });

        await Promise.all(Object.entries(rollNoRoomMap).map(async ([rollNo, { block, roomNo }]) => {
            await User.findOneAndUpdate({ rollNo }, { block, roomNo });
        }));

        await RegisterStudent.deleteMany({ roomNo: { $ne: '' } });

        res.status(200).json({ message: 'Rooms allocated successfully' });
    } catch (error) {
        console.error('Error allocating rooms:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
});









export default router;