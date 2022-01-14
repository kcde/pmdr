import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import { Settings } from '@styled-icons/evaicons-solid';
import { SettingsModal } from './components/SettingsModal/SettingsModal';
import TimerState from './context/TimerState';

const SettingsButton = styled.div`
  background: none;
  border: none;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  height: 100vh;
`;

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <TimerState>
      <Wrapper>
        <Header />

        {/* ====================   timer goes here */}

        <SettingsButton
          onClick={() => {
            setModalOpen(true);
            console.log('clicked');
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
