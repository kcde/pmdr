import React from 'react';
import styled from 'styled-components';

const Selector = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #eff1fa;
  display: grid;
  place-items: center;
`;

const SelectorText = styled.p((props) => ({
  fontFamily: props.fontFamily,
  fontWeight: '500',
}));

export const FontSelector = ({ font }) => {
  return (
    <Selector>
      <SelectorText fontFamily={font}>Aa</SelectorText>
    </Selector>
  );
};
