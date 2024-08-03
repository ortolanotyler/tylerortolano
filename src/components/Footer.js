import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <StyledFooter>
    <p>© 2024 Tyler Ortolano.</p>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 1rem;
  margin-top: auto;  /* Ensure it pushes to the bottom */
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

export default Footer;
