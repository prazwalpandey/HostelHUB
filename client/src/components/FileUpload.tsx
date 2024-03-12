import  { useState, ChangeEvent } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false); // Add state for upload status

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.log("No file selected");
        return;
      }

      setUploading(true); // Set uploading status to true

      const formData = new FormData();
      formData.append("csvFile", selectedFile);

      const response = await fetch("http://localhost:5000/fileupload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("File uploaded successfully!");
      setSelectedFile(null);
      window.location.reload();
    } catch (error) {
      console.log("Error uploading file:", error);
    } finally {
      setUploading(false); // Reset uploading status to false
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!selectedFile && (
        <label
          htmlFor="fileInput"
          className="cursor-pointer bg-blue-500 text-white font-medium px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
        >
          Select File
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            className="hidden"
            onChange={handleFileChange}
            id="fileInput"
          />
        </label>
      )}

      {selectedFile && (
        <div className="flex flex-row items-center">
          <p className="mr-2">
            Selected File: {selectedFile.name.substring(0, 8)}...
          </p>
          <button
            onClick={handleUpload}
            className="bg-green-500 text-white font-medium px-4 py-2 rounded-md shadow-md hover:bg-green-600"
            disabled={uploading} // Disable button while uploading
          >
            {uploading ? "Uploading..." : "Upload"} {/* Display "Uploading..." while uploading */}
          </button>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
