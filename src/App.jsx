import React, { useState } from 'react';
import "./App.css"
const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    const { username, password } = formData;

    if (username.trim() === '' || password.trim() === '') {
      // Show modal for incomplete details
      setShowModal(true);
    } else {
      // Log details to console
      console.log('Username:', username);
      console.log('Password:', password);

      // Store details in localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // Show success modal
      setShowModal(true);
    }
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {showModal && (
        <div className="modal">
          {formData.username && formData.password ? (
            <p>Login successfully done!</p>
          ) : (
            <p>Please enter all details first.</p>
          )}
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
