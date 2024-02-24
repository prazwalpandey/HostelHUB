import { useState } from 'react';

function CheckboxLayout() {
  const [selectedRooms, setSelectedRooms] = useState({});

  const handleCheckboxChange = (event,block,roomNumber) => {
    const isChecked = event.target.checked;
    const id = `${block}${roomNumber.toString()}`;

    setSelectedRooms((prevState) => ({
      ...prevState,
      [id]: isChecked,
    }));
  };

  const handleSelectAll = (block, floor) => {
    const updatedRooms = { ...selectedRooms };
  
    for (let j = 1; j <= 19; j++) {
      const id = `${block}${floor}${j.toString().padStart(2, '0')}`;
      updatedRooms[id] = true;
    }
  
    setSelectedRooms(updatedRooms);
  };
  

  const renderCheckboxes = (block) => {
    return (
      <>
        {[1, 2, 3].map((floor) => (
          <div key={`${block}_floor_${floor}`}>
            <h2 className="text-xl font-bold mb-2">{`Block ${block} - Floor ${floor}`}</h2>
            <div className="flex flex-col gap-2">
              {Array.from({ length: 19 }).map((_, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`${block}${floor}${index + 1}`}
                    className="form-checkbox"
                    checked={selectedRooms[`${block}${floor}${index + 1}`] || false}
                    onChange={(e) => handleCheckboxChange(e, block, floor, index + 1)}
                  />
                  <span>{`${block}${floor}${index + 1}`}</span>
                </label>
              ))}
              <label className="flex items-center">
                <span className="w-4 h-4 mr-2 rounded-full bg-gray-200 border border-gray-400"></span>
                <span>Select All</span>
                <span className="ml-auto">
                  <input
                    type="checkbox"
                    className="hidden form-checkbox"
                    onChange={() => handleSelectAll(block,floor)}
                  />
                  <span className="w-4 h-4 rounded-full bg-gray-200 border border-gray-400 cursor-pointer hover:bg-gray-300"></span>
                </span>
              </label>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {['A', 'B', 'C'].map((block) => (
        <div className="col" key={`block_${block}`}>
          {renderCheckboxes(block)}
        </div>
      ))}
    </div>
  );
}

export default CheckboxLayout;

