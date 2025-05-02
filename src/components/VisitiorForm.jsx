import React, { useState, useContext } from "react";
import { VisitorContext } from "../context/VisitorContext";

const VisitorForm = () => {
  const { addVisitor } = useContext(VisitorContext);

  const [form, setForm] = useState({
    name: "",
    flat: "",
    purpose: "Delivery",
    mobile: "",
  });

  const [error, setError] = useState("");
  const [lastSubmitted, setLastSubmitted] = useState(null); // ⭐ Track the last submitted visitor

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(form.mobile)) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }

    addVisitor(form);
    setLastSubmitted(form); // ⭐ Store submitted form
    setForm({ name: "", flat: "", purpose: "Delivery", mobile: "" }); // ⭐ Reset form fields
  };

  return (
    <div className="form-container">
      <h2>Visitor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          name="flat"
          value={form.flat}
          onChange={handleChange}
          placeholder="Flat Number"
          required
        />
        <select name="purpose" value={form.purpose} onChange={handleChange}>
          <option value="Delivery">Delivery</option>
          <option value="Guest">Guest</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Other">Other</option>
        </select>
        <input
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>

      {/* ✅ Display last submitted visitor data */}
      {lastSubmitted && (
        <div className="submitted-info">
          <h4>Submitted Visitor:</h4>
          <p>
            <strong>{lastSubmitted.name}</strong> from Flat{" "}
            {lastSubmitted.flat} for {lastSubmitted.purpose} (📞{" "}
            {lastSubmitted.mobile})
          </p>
        </div>
      )}
    </div>
  );
};

export default VisitorForm;
