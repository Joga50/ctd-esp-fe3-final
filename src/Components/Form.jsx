



  import React, { useState } from "react";

  const Form =() => {

      //Aqui deberan implementar el form completo con sus validaciones

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
      setFormError("");
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setFormError("");
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let error = "";
  
      if (name.length < 5) {
        error = "Name must be at least 5 characters long.";
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        error = "Invalid email address.";
      }
  
      if (error !== "") {
        setFormError(error);
      } else {
        setFormSuccess(`Thank you for submitting, ${name}! We will contact you soon.`);
        setName("");
        setEmail("");
      }
    };
  
    return (
      <div className="container">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nameInput">Name:</label>
            <input type="text" className="form-control" id="nameInput" value={name} onChange={handleNameChange} placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email address:</label>
            <input type="email" className="form-control" id="emailInput" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          {formError && <div className="alert alert-danger">{formError}</div>}
          {formSuccess && <div className="alert alert-success">{formSuccess}</div>}
        </form>
      </div>
    );
  }
  
  export default Form;
  
