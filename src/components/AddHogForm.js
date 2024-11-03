// src/components/AddHogForm.js
import React, { useState } from 'react';

function AddHogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    weight: '',
    greased: false,
    highestMedal: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here if necessary
    const newHog = {
      name: formData.name,
      specialty: formData.specialty,
      weight: parseInt(formData.weight),
      greased: formData.greased,
      'highest medal achieved': formData.highestMedal,
      image: formData.image
    };
    addHog(newHog);
    // Reset form
    setFormData({
      name: '',
      specialty: '',
      weight: '',
      greased: false,
      highestMedal: '',
      image: ''
    });
  };

  return (
    <div className="ui container" style={{ padding: '20px' }}>
      <h2>Add a New Hog</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Specialty:</label>
          <input
            type="text"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Weight (lbs):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Greased:</label>
          <input
            type="checkbox"
            name="greased"
            checked={formData.greased}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Highest Medal Achieved:</label>
          <input
            type="text"
            name="highestMedal"
            value={formData.highestMedal}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button className="ui button primary" type="submit">
          Add Hog
        </button>
      </form>
    </div>
  );
}

export default AddHogForm;
