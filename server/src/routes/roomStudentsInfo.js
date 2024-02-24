import User from "../database/schemas/user";


export const getUserRoomInfo = async (req, res) => {
    const { roomNo } = req.params;
    const users = await User.find({ roomNo });
    res.send(users);
}