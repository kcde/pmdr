import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: ${(props) => props.bg};
  height: 53px;
  width: 140px;
  color: white;
  border-radius: 26px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const ApplyButton = () => {
  return <Wrapper bg="#f87070">Apply</Wrapper>;
};
