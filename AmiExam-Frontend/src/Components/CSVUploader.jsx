import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Check if the file is a CSV format
      const fileType = selectedFile.type;
      if (fileType !== "text/csv") {
        alert("Please upload a CSV file.");
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle file upload here (e.g., send to backend)
    console.log("File uploaded:", file);
  };

  return (
    //flex justify-center items-center
    <div className=" bg-emerald-100 h-screen">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-4 border border-lime-950 bg-white  rounded-lg shadow-2xl"
      >
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block text-emerald-700 font-bold mb-2"
          >
            Upload CSV File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".csv"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
