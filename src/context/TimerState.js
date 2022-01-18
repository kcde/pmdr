import React, { useReducer } from 'react';
import { TimerContext } from './timerContext';
import { timerReducer } from './timer-reducer';
import { ADD_SETTINGS, ADD_TIMER } from './timer-actions';

const TimerState = (props) => {
  const initialState = {
    settings: {
      pomodoro: 25,
      'short break': 5,
      'long break': 15,
      font: 'Kumbh Sans',
      color: '#F87070',
    },
    paused: true,
    currentTimer: 25,
  };

  const addSettings = (settings) => {
    dispatch({
      type: ADD_SETTINGS,
      payload: settings,
    });
  };

  const addTimer = (int) => {
    dispatch({ type: ADD_TIMER, payload: int });
  };

  const [state, dispatch] = useReducer(timerReducer, initialState);
  return (
    <TimerContext.Provider
      value={{ settings: state.settings, currentTimer: state.currentTimer, addSettings, addTimer }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerState;
