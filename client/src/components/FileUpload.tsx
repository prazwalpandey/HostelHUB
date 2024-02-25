import  { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Implement your upload functionality here
    // You can use selectedFile to upload the file
    console.log("Upload file:", selectedFile);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .pdf" // Specify the file types you want to accept
        className="hidden"
        onChange={handleFileChange}
        id="fileInput"
      />
      <label htmlFor="fileInput" className="cursor-pointer bg-blue-500 text-white font-medium px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
        Select File
      </label>
      {selectedFile && (
        <div className="mt-4 flex items-center">
          <p className="mr-2">Selected File: {selectedFile.name}</p>
          <button onClick={handleUpload} className="bg-green-500 text-white font-medium px-4 py-2 rounded-md shadow-md hover:bg-green-600">
            Upload
          </button>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
