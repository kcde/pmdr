import React, { useReducer } from 'react';
import { TimerContext } from './timerContext';
import { timerReducer } from './timer-reducer';
import { ADD_SETTINGS } from './timer-actions';

const TimerState = (props) => {
  const initialState = {
    timer: {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
    },
    font: 'Kumbh Sans',
    color: 'F87070',
    paused: true,
  };

  const addSettings = (settings) => {
    dispatch({
      type: ADD_SETTINGS,
      payload: settings,
    });
  };

  const [state, dispatch] = useReducer(timerReducer, initialState);
  return (
    <TimerContext.Provider
      value={{ timerSettings: state.timer, font: state.font, color: state.color, addSettings }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerState;
