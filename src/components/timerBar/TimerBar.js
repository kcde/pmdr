import React, { useState, useContext } from 'react';
import { TimerContext } from '../../context/timerContext';
import styled from 'styled-components';

const StyledTimeBar = styled.div`
  background-color: #161932;
  display: flex;
  width: 373px;
  margin: 45px auto 0 auto;
  justify-content: space-between;
  position: relative;
  padding: 0 8px;
  border-radius: 31px;
`;

const TimeBarButton = styled.button`
  color: ${(props) => (props.active ? '#1E213F' : '#D7E0FF')};
  position: relative;
  background-color: ${(props) => (props.active ? props.bg : 'transparent')};
  padding: 15px 20px;
  margin: 8px 0;
  font-weight: 600;
  font-family: ${(props) => props.font};
  border-radius: 25px;
  z-index: 1;
  cursor: pointer;
`;

const TimerBar = ({ start }) => {
  //   const timers = ['pomodoro', 'short break', 'long break'];
  const [selectedTimer, setSelectedTimer] = useState(0);
  const { settings, setPause, addTimer } = useContext(TimerContext);
  const timers = ['pomodoro', 'short break', 'long break'];

  const timerSelectHandler = (id, timerName) => {
    setPause(false);
    setSelectedTimer(id);
    addTimer(settings[timerName]);
    start(settings[timerName]);
  };

  return (
    <StyledTimeBar>
      {timers.map((timer, i) => (
        <TimeBarButton
          bg={settings.color}
          font={settings.font}
          active={i === selectedTimer}
          key={timer}
          onClick={() => timerSelectHandler(i, timer)}
        >
          {timer}
        </TimeBarButton>
      ))}
    </StyledTimeBar>
  );
};

export default TimerBar;
