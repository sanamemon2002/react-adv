import { useState } from "react";


export default function Formdata() {
    const [formData, setFormData] = useState({name: "",email: "",password: "",});
    const [errors, setErrors] = useState({});
    const [data, setdata] = useState(null);
    const Change = (event) => {
    const { name, value } = event.target;
    setFormData((preData) => ({
          ...preData,
          [name]: value,
        }));
      };


      const validate = () => {
        const newerrors = {};
        if (!formData.name.trim()) {
          newerrors.name = "Name is required.";
        }
    
        const emails = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
          newerrors.email = "Email is required.";
        } else if (!emails.test(formData.email)) {
          newerrors.email = "Please enter a valid email address.";
        }
    
        if (!formData.password.trim()) {
          newerrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
          newerrors.password = "Password must be at least 6 characters long.";
        }
    
        setErrors(newerrors);
        return Object.keys(newerrors).length === 0;
      };
    
      const Submit = (event) => {
        event.preventDefault(); 
    
        if (validate()) {
          setdata(formData);
          setFormData({ name: "", email: "", password: "" }); 
          setErrors({}); 
        }
      };

  return (
    <div>
        <h2>Sign-Up Form</h2>
      <form onSubmit={Submit}>
        <label>Name:<input type="text" name="name" value={formData.name} onChange={Change} placeholder="Enter your name" required/>
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}</label>
        <br />
        <label>Email:<input type="email" name="email" value={formData.email} onChange={Change} placeholder="Enter your email" required/>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}</label>
        <br />
        <label>Password:<input type="password" name="password" value={formData.password} onChange={Change} placeholder="Enter your password" required/>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}</label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {data && (
        <div>
          <h3>Form Data Submitted:</h3>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Password:</strong> {data.password}</p>
        </div>
      )}
    </div>
  )
}
