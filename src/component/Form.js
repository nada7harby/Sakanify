import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("llll");
    // Send data to API
    fetch("https://sakanify.onrender.com/api/v1/students/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // or response.text() or whatever the server sends
      })
      .then((data) => {
        // Handle API response
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://sakanify.onrender.com/api/v1/students/login"
      method="post"
    >
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <input
          type="password"
          name="password"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
