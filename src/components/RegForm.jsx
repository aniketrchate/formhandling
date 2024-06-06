import React, { useState } from 'react';

const RegForm = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male'); // Default gender
  const [city, setCity] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isAgreed) {
      console.log(`Email ID: ${emailId}`);
      console.log(`Password: ${password}`);
      console.log(`Gender: ${gender}`);
      console.log(`City: ${city}`);
    } else {
      console.log('Information cannot be shown here.');
    }
  };

      return (
        <form onSubmit={handleSubmit} className="row g-3">
          <h2>Registration Form</h2>
          <div className="col-md-6">
            <label htmlFor="emailId" className="form-label">Email ID:</label>
            <input
              type="email"
              id="emailId"
              name="emailId"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-select">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="col-12 form-check">
            <input
              type="checkbox"
              id="isAgreed"
              name="isAgreed"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="form-check-input"
            />
            <label htmlFor="isAgreed" className="form-check-label">I Agree</label>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      );
    };
    
    export default RegForm;