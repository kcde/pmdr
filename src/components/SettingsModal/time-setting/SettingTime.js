import React from 'react';
import styled from 'styled-components';
import { TimeSelector } from './TimeSelector';

const Wrapper = styled.div`
  border-bottom: 1px solid #979797;
  padding-bottom: 24px;
`;
const TimeHead = styled.h3`
  text-align: center;
  margin-bottom: 26px;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const TimeSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 8px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    > * + * {
      margin-top: 0;
      margin-left: 10px;
    }
  }
`;

export const SettingTime = ({
  pomodoroTime,
  shortBreakTime,
  longBreakTime,
  setPomodoroTime,
  setShortBreakTime,
  setLongBreakTime,
}) => {
  return (
    <Wrapper>
      <TimeHead>time (minutes)</TimeHead>
      <TimeSelectorWrapper>
        <TimeSelector defaultVal={pomodoroTime} type="pomodoro" changeHandler={setPomodoroTime} />
        <TimeSelector
          defaultVal={shortBreakTime}
          type="short break"
          changeHandler={setShortBreakTime}
        />
        <TimeSelector
          defaultVal={longBreakTime}
          type="long break"
          changeHandler={setLongBreakTime}
        />
      </TimeSelectorWrapper>
    </Wrapper>
  );
};
