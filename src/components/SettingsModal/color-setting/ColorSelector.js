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
}));

export const ColorSelector = ({ color }) => {
  return (
    <Selector bg={color}>
      <Checkmark size={24} />
    </Selector>
  );
};
