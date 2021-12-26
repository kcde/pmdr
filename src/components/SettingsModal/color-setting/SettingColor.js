import React, { useState } from 'react';
import styled from 'styled-components';
import { ColorSelector } from './ColorSelector';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ColorHead = styled.h3`
  text-align: center;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;

    text-align: left;
  }
`;

const ColorSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;

  > * + * {
    margin-left: 1rem;
  }
`;

export const SettingColor = () => {
  const requiredColor = ['F87070', '70F3F8', 'D881F8'];
  const [selected, setSelected] = useState(0);
  return (
    <Wrapper>
      <ColorHead>color</ColorHead>

      <ColorSelectorWrapper>
        {requiredColor.map((color, i) => (
          <ColorSelector
            selected={color === requiredColor[selected]}
            key={i}
            color={`#${color}`}
            clicked={() => setSelected(i)}
          />
        ))}
      </ColorSelectorWrapper>
    </Wrapper>
  );
};
