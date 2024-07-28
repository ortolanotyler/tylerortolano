import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
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
    max-width: 500px;

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
`;

export default ContactForm;
