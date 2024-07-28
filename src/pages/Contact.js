import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <StyledContact id="contact">
    <ContactForm />
  </StyledContact>
);

const StyledContact = styled.section`
  padding: 2rem;
  padding-top: 100px; /* Add padding to account for the fixed navbar */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Contact;
