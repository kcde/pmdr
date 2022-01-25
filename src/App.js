import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import { Settings } from '@styled-icons/evaicons-solid';
import { SettingsModal } from './components/SettingsModal/SettingsModal';
import TimerState from './context/TimerState';
import TimerBar from './components/timerBar/TimerBar';
import Countdown from './components/Countdown/Countdown';
import useCountDown from 'react-countdown-hook';
import { TimerContext } from './context/timerContext';

const SettingsButton = styled.div`
  background: none;
  border: none;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`;

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [timeLeft, { start, pause, resume }] = useCountDown(10 * 1 * 1000);

  function pausedHandler() {
    pause();
  }

  function resumeHandler() {
    resume();
  }

  return (
    <TimerState>
      <Wrapper>
        <Header />
        <TimerBar />

        <Countdown pause={pausedHandler} resume={resumeHandler} timeLeft={timeLeft} start={start} />

        <SettingsButton
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <Settings color="#D7E0FF" width="28" height="28" onClick={() => {}} />
        </SettingsButton>

        {modalOpen ? <SettingsModal setModal={setModalOpen} /> : null}
      </Wrapper>
    </TimerState>
  );
}
export default App;
