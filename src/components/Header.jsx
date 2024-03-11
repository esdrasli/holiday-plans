// Header.jsx
import React from 'react';
import styled from 'styled-components';

const defaultColors = {
    primary: '#FF5500',
    secondary: '#0099FF',
    text: '#333333',
    background: '#FFFFFF'
};

const HeaderContainer = styled.header`
  background-color: ${defaultColors.secondary};
  color: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Vacation Planner</Title>
    </HeaderContainer>
  );
};

export default Header;
