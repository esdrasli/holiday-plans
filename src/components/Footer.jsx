// Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; Natanael Lima | 2024 Vacation Planner. All rights reserved. </p>
    </FooterContainer>
  );
};

export default Footer;
