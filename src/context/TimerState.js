import React, { useReducer } from 'react';
import { TimerContext } from './timerContext';
import { timerReducer } from './timer-reducer';
import { ADD_SETTINGS, ADD_TIMER, SET_PAUSE } from './timer-actions';

const TimerState = (props) => {
  const initialState = {
    settings: {
      pomodoro: 25,
      'short break': 5,
      'long break': 15,
      font: 'Kumbh Sans',
      color: '#F87070',
    },
    paused: false,
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

  const setPause = (pauseState) => {
    dispatch({ type: SET_PAUSE, payload: pauseState });
  };

  const [state, dispatch] = useReducer(timerReducer, initialState);
  return (
    <TimerContext.Provider
      value={{
        settings: state.settings,
        currentTimer: state.currentTimer,
        paused: state.paused,
        addSettings,
        addTimer,
        setPause,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerState;
