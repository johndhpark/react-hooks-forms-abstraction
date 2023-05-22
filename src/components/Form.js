import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }

  function handleChange(e) {
    // body...
    let { name, type, value } = e.target;

    if (type === "checkbox") value = e.target.checked;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    // body...
    e.preventDefault();
    console.log(formData);

    e.target.firstName.value = "";
    e.target.lastName.value = "";
    e.target.admin.checked = false;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        type="text"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        name="lastName"
        type="text"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        name="admin"
        type="checkbox"
        onChange={handleChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
