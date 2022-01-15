import React, { useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid';
import { Overlay } from './Overlay';
import { SettingTime } from './time-setting/SettingTime';
import { SettingFont } from './font-setting/SettingFont';
import { SettingColor } from './color-setting/SettingColor';
import { ApplyButton } from './ApplyButton';
import theme from '../../theme/schema.json';
import { TimerContext } from '../../context/timerContext';

const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 85vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  @media screen and (min-width: 768px) {
    width: 540px;
  }
`;
const SettingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 31px 24px;
  border-bottom: 1px solid #979797;
  @media screen and (min-width: 920px) {
    padding: 24px 40px 31px 40px;
  }
`;
const SettingHead = styled.h2``;
const SettingClose = styled.button`
  border: none;
  background-color: transparent;
`;

const StyledCloseIcon = styled(Close)`
  color: #979797;
  :hover {
    color: #1e213f;
  }
`;
const SettingBody = styled.div`
  padding: 24px;
  @media screen and (min-width: 920px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const ApplyButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -${53 / 2}px;
`;

export const SettingsModal = ({ setModal }) => {
  const { settings, addSettings } = useContext(TimerContext);
  console.log(settings);
  const [color, setColor] = useState(0);
  const [font, setFont] = useState(0);
  const [pomodoro, setPomodoro] = useState(settings.pomodoro);
  const [shortBreak, setShortBreak] = useState(settings.shortBreak);
  const [longBreak, setLongBreak] = useState(settings.longBreak);

  const { mainColors, fonts } = theme.data;

  const applyHandler = () => {
    let appSetting = {
      pomodoro: pomodoro,
      shortBreak: shortBreak,
      longBreak: longBreak,
      font: fonts[font],
      color: mainColors[color],
    };

    console.log(appSetting);

    addSettings(appSetting);
  };

  return createPortal(
    <>
      <Overlay />
      <ModalWrapper>
        <SettingHeader>
          <SettingHead>Settings</SettingHead>
          <SettingClose onClick={() => setModal(false)}>
            <StyledCloseIcon width="24" height="24" />
          </SettingClose>
        </SettingHeader>

        <SettingBody>
          {/* Setting timer */}
          <SettingTime
            pomodoroTime={pomodoro}
            shortBreakTime={shortBreak}
            longBreakTime={longBreak}
            setPomodoroTime={setPomodoro}
            setShortBreakTime={setShortBreak}
            setLongBreakTime={setLongBreak}
          />
          {/* Setting fonts*/}
          <SettingFont themeFonts={fonts} selected={font} setSelected={setFont} />
          {/* Setting color*/}
          <SettingColor selected={color} setSelected={setColor} themeColors={mainColors} />
        </SettingBody>
        {/* apply button*/}
        <ApplyButtonWrapper>
          <ApplyButton clickHandler={applyHandler} />
        </ApplyButtonWrapper>
      </ModalWrapper>
    </>,
    document.getElementById('modal')
  );
};
