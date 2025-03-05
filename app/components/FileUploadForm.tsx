import React, { useState } from "react";

const FileUploadForm = () => {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !email) {
      alert("Please provide an email and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("documentType", documentType);
    formData.append("file", file);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert("Email sent successfully!");
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="documentType">Document Type:</label>
        <input
          type="text"
          id="documentType"
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
          placeholder="Enter document type (e.g., Invoice, Report)"
          required
        />
      </div>
      <div>
        <label htmlFor="file">Upload PDF or Excel File:</label>
        <input
          type="file"
          id="file"
          accept=".pdf, .xls, .xlsx"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default FileUploadForm;
