import React from 'react';
import styled from 'styled-components';
import { FontSelector } from './FontSelector';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  border-bottom: 1px solid #979797;
  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FontHead = styled.h3`
  text-align: center;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;

    text-align: left;
  }
`;

const FontSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;

  > * + * {
    margin-left: 1rem;
  }
`;

export const SettingFont = () => {
  const requiredFonts = ['Kumbh Sans', 'Roboto Slab', 'Space Mono'];
  return (
    <Wrapper>
      <FontHead>Font</FontHead>

      <FontSelectorWrapper>
        {requiredFonts.map((font, i) => (
          <FontSelector key={i} font={font} />
        ))}
      </FontSelectorWrapper>
    </Wrapper>
  );
};
