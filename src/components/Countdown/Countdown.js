import React, { useContext, useEffect } from 'react';

import styled from 'styled-components';
import { TimerContext } from '../../context/timerContext';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const GeneralStyle = styled.div`
  display: grid;
  place-items: center;
  border-radius: 100%;
  font-family: ${(props) => props.font};
  color: #d7e0ff;
`;

const StyledCountdown = styled(GeneralStyle)`
  margin-top: 48px;
  margin-bottom: 79px;
`;

const Outer = styled(GeneralStyle)`
  width: 300px;
  height: 300px;

  transition: 350ms ease-in-out;
  box-shadow: 18px 18px 40px 20px #161932, -18px -18px 80px -25px #6f76b9;
  background-image: linear-gradient(to bottom right, #0e112a, #2e325a);
`;

const Inner = styled(GeneralStyle)`
  width: 88%;
  height: 88%;
  background-color: #161932;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const ControlBtn = styled.h3`
  letter-spacing: 13px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 19px;
  :hover {
    color: ${(props) => props.color};
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;
const Time = styled.div`
  font-weight: 600;
  font-size: 80px;
`;

const Countdown = ({ resume, timeLeft, pause, start, restart }) => {
  const { settings, paused, setPause, currentTimer } = useContext(TimerContext);
  const timerInSeconds = 60 * currentTimer * 1000;
  const prettyMinutes = Math.trunc(timeLeft / 1000 / 60);
  const prettySeconds = (timeLeft / 1000) % 60;

  const pauseHandler = () => {
    pause();
    setPause(true);
  };

  const resumeHandler = () => {
    resume();
    setPause(false);
  };

  useEffect(() => {
    start(timerInSeconds);
  }, [timerInSeconds, start]);
  const longPercentage = (timeLeft / timerInSeconds) * 100;
  const fixedPercentage = longPercentage.toFixed(1);

  //const percentage = (timerInSeconds)

  return (
    <StyledCountdown font={settings.font}>
      <Outer>
        <Inner>
          <CircularProgressbarWithChildren
            circleRatio={1}
            value={+fixedPercentage}
            styles={{
              path: {
                // Path color
                stroke: `${settings.color}`,
                strokeWidth: 4,
              },
              trail: {
                stroke: 'none',
              },
            }}
          >
            <TimeContainer>
              <Time>{`${prettyMinutes}:${
                prettySeconds < 10 ? prettySeconds.toString().padStart(2, '0') : prettySeconds
              }`}</Time>

              {timeLeft > 0 ? (
                <ControlBtn onClick={paused ? resumeHandler : pauseHandler} color={settings.color}>
                  {paused ? 'start' : 'pause'}
                </ControlBtn>
              ) : (
                <ControlBtn onClick={() => restart(currentTimer)} color={settings.color}>
                  restart
                </ControlBtn>
              )}
            </TimeContainer>
          </CircularProgressbarWithChildren>
        </Inner>
      </Outer>
    </StyledCountdown>
  );
};

export default Countdown;
