import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIosDownward, ArrowIosUpward } from '@styled-icons/evaicons-solid';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: initial;
  }
`;

const TimeType = styled.h4`
  color: rgba(30, 33, 63, 1);
  opacity: 40%;
  flex: 1;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

const TimeInputWrapper = styled.div`
  background-color: #eff1fa;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 11px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

const TimeInput = styled.input.attrs({ type: 'number' })`
  background-color: transparent;
  font-size: 14px;
  font-weight: 700;
  border: none;
  outline: none;
  width: 50%;
  ::-webkit-inner-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
  }
`;

const TimeInputControl = styled.div`
  display: flex;

  flex-direction: column;
  color: rgba(30, 33, 63, 1);
`;

const InputControlButton = styled.button`
  opacity: 24%;
  cursor: pointer;
`;

export const TimeSelector = ({ handleDec, defaultVal }) => {
  const [inputVal, setInputVal] = useState(defaultVal);
  return (
    <Wrapper>
      <TimeType>pomodoro </TimeType>
      <TimeInputWrapper>
        <TimeInput value={inputVal} onChange={(e) => setInputVal(Number(e.target.value))} min="5" />
        <TimeInputControl>
          <InputControlButton onClick={() => setInputVal(inputVal + 1)}>
            {' '}
            <ArrowIosUpward size="18" />
          </InputControlButton>
          <InputControlButton
            onClick={() => {
              if (!(inputVal <= 5)) setInputVal(inputVal - 1);
            }}
          >
            {' '}
            <ArrowIosDownward size="18" />
          </InputControlButton>
        </TimeInputControl>
      </TimeInputWrapper>
    </Wrapper>
  );
};
