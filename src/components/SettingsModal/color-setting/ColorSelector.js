import React from 'react';
import styled from 'styled-components';
import { Checkmark } from '@styled-icons/evaicons-solid';

const Selector = styled.div((props) => ({
  backgroundColor: props.bg,
  width: '40px',
  height: '40px',
  borderRadius: '100%',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
}));

export const ColorSelector = ({ color, selected, clicked }) => {
  return (
    <Selector bg={color} onClick={clicked}>
      {selected ? <Checkmark size={24} /> : null}
    </Selector>
  );
};
