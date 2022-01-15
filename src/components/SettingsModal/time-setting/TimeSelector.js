import React from 'react';
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

const StyledArrowDown = styled(ArrowIosDownward)`
  cursor: pointer;
  color: #1e213f;
  opacity: 25%;
  :hover {
    opacity: 100%;
  }
`;
const StyledArrowUp = styled(ArrowIosUpward)`
  cursor: pointer;
  color: #1e213f;
  opacity: 25%;
  :hover {
    opacity: 100%;
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

export const TimeSelector = ({ defaultVal, type, changeHandler }) => {
  //const [inputVal, setInputVal] = useState(defaultVal);
  return (
    <Wrapper>
      <TimeType>{type} </TimeType>
      <TimeInputWrapper>
        <TimeInput
          value={defaultVal}
          onChange={(e) => changeHandler(Number(e.target.value))}
          min="5"
        />
        <TimeInputControl>
          <StyledArrowUp size="18" onClick={() => changeHandler(defaultVal + 1)} />
          <StyledArrowDown
            size="18"
            onClick={() => {
              if (!(defaultVal <= 5)) changeHandler(defaultVal - 1);
            }}
          />
        </TimeInputControl>
      </TimeInputWrapper>
    </Wrapper>
  );
};
