import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Check if the file is a CSV format
      const fileType = selectedFile.type;
      if (fileType !== "text/csv" && fileType !== "application/vnd.ms-excel") {
        alert("Please upload a CSV file.");
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/questions/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert("Error uploading file: " + error.response.data.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full p-4 border border-grey-900 bg-white rounded-lg shadow-md"
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
    </>
  );
};

export default UploadForm;
