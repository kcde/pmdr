import React from 'react';
import styled from 'styled-components';
import Logo from './logo';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default Header;
