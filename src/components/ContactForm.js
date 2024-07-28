import React from 'react';
import styled from 'styled-components';

const ContactForm = () => (
  <StyledForm>
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </StyledForm>
);

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
