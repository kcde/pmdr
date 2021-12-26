import React from 'react';
import styled from 'styled-components';

const Selector = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${(props) => (props.bg ? '#161932' : '#eff1fa')};
  display: grid;
  place-items: center;
  color: ${(props) => (props.bg ? '#eff1fa' : '#161932')};
  cursor: pointer;
  :hover {
    background-color: #161932;
    color: #eff1fa;
  }
`;

const SelectorText = styled.p((props) => ({
  fontFamily: props.fontFamily,
  fontWeight: '500',
}));

export const FontSelector = ({ font, selected, clicked }) => {
  return (
    <Selector onClick={clicked} bg={selected}>
      <SelectorText fontFamily={font}>Aa</SelectorText>
    </Selector>
  );
};
