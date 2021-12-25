import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid';
import { Overlay } from './Overlay';
import { SettingTime } from './SettingTime';

const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 85vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;

  @media screen and (min-width: 920px) {
    width: 50vw;
  }
`;
const SettingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 31px 24px;
  border-bottom: 1px solid #979797;
  @media screen and (min-width: 920px) {
    padding: 24px 4px 31px 40px;
  }
`;
const SettingHead = styled.h2``;
const SettingClose = styled.button`
  border: none;
  background-color: transparent;
`;
const SettingBody = styled.div`
  padding: 24px;
  @media screen and (min-width: 920px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const SettingsModal = ({ setModal }) =>
  createPortal(
    <>
      <Overlay />
      <ModalWrapper>
        <SettingHeader>
          <SettingHead>Settings</SettingHead>
          <SettingClose onClick={() => setModal(false)}>
            <Close width="24" height="24" color="#979797" />
          </SettingClose>
        </SettingHeader>

        <SettingBody>
          {/* Setting timer */}
          <SettingTime />
          {/* Setting fonts*/}
          {/* Setting color*/}
        </SettingBody>
        {/* apply button*/}
      </ModalWrapper>
    </>,
    document.getElementById('modal')
  );
