import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Verification() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle sending OTP
  const handleSendCode = async () => {
    if (!mobileNumber) {
      alert('Please enter a valid mobile number.');
      return;
    }

    setIsLoading(true);
    try {
      // API call to send OTP
      const response = await axios.post('http://localhost:8080/api/otp/send', { mobileNumber });
      if (response.status === 200) {
        alert('A 6-digit verification code has been sent to your mobile number.');
        setCodeSent(true);  // Enable OTP input
      }
    } catch (error) {
      alert('Failed to send OTP.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle OTP verification
  const handleVerify = async (e) => {
    e.preventDefault();

    if (verificationCode.length !== 6) {
      alert('Please enter a valid 6-digit verification code.');
      return;
    }

    setIsLoading(true);
    try {
      // API call to verify OTP
      const response = await axios.post('http://localhost:8080/api/otp/verify', {
        mobileNumber,
        otp: verificationCode,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('authToken', token);  // Store the token
        alert('Verification successful!');
        navigate('/search');  // Redirect to the dashboard after successful verification
      }
    } catch (error) {
      alert('Failed to verify OTP. Please check the code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            {/* <img src="img/allianz-logo.png" alt="Allianz" height="30" /> */}
          </a>
        </div>
      </nav>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Mobile Number Verification</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <form onSubmit={handleVerify}>
                      <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                        <div className="input-group">
                          <span className="input-group-text">+1</span>
                          <input
                            type="tel"
                            className="form-control"
                            id="mobileNumber"
                            placeholder="Enter your mobile number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="verificationCode" className="form-label">Verification Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="verificationCode"
                          placeholder="Enter 6-digit code"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          disabled={!codeSent}
                          required={codeSent}
                        />
                        <small className="text-muted">We'll send you a verification code</small>
                      </div>
                      {!codeSent ? (
                        <button type="button" className="btn btn-primary" onClick={handleSendCode} disabled={isLoading}>
                          {isLoading ? 'Sending...' : 'Send Verification Code'}
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-success" disabled={isLoading}>
                          {isLoading ? 'Verifying...' : 'Verify & Continue'}
                        </button>
                      )}
                    </form>
                  </div>

                  <div className="col-md-6">
                    <div className="p-4 bg-light rounded">
                      <h5>Why we verify your mobile number</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><strong>Security:</strong> Protects your personal information and prevents fraud.</li>
                        <li className="mb-2"><strong>Personalization:</strong> Allows us to save your valuation history for future reference.</li>
                        <li className="mb-2"><strong>Updates:</strong> We can notify you if your vehicle's value changes significantly.</li>
                        <li><strong>Support:</strong> Our team can contact you if we need additional information.</li>
                      </ul>
                      <p className="small text-muted mt-3">We will never share your number with third parties for marketing purposes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <a href="index.html" className="btn btn-outline-secondary">Back to Home</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="text-center">
            <p className="mb-0">© 2023 Allianz Vehicle Valuation Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Verification;
