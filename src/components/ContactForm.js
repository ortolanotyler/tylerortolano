import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSuccessMessage('Thank you for reaching out! I will be in touch soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccessMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('An error occurred while sending the message. Please try again later.');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
   
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </StyledForm>
  );
};

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  h2 {
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;

    input, textarea {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    button {
      padding: 1rem;
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .success-message {
  
    margin-top: 1rem;
    color: black;
    font-size: 22px;
    font-weight: bold;
  }
`;

export default ContactForm;

