import { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        accept=".csv .xlsx .xls" // Specify the file types you want to accept
        className="hidden"
        onChange={handleFileChange}
        id="fileInput"
      />
      <label htmlFor="fileInput" className="cursor-pointer bg-blue-500 text-white font-medium px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
        Select File
      </label>
      {selectedFile && (
        <div className="mt-4">
          <p>Selected File: {selectedFile.name}</p>
          <p>File Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
