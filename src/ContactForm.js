// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';
import { Link } from 'react-router-dom';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      // Perform form submission logic here, e.g., API call

      // Simulating form submission success
      setIsSubmitted(true);
      setIsError(false);
    } else {
      setIsSubmitted(false);
      setIsError(true);
    }
  };

  return (
    <div className="contact-form">
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <h2>Contact Us</h2>
      {isSubmitted && <p className="success-message">Form submitted successfully!</p>}
      {isError && <p className="error-message">Please fill out all fields.</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input  className="textarea"type='text'placeholder='Add your text' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
