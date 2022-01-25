import { ADD_SETTINGS, ADD_TIMER, SET_PAUSE } from './timer-actions';
export const timerReducer = (state, action) => {
  switch (action.type) {
    case ADD_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };

    case ADD_TIMER:
      return {
        ...state,
        currentTimer: action.payload,
      };

    case SET_PAUSE:
      return {
        ...state,
        paused: action.payload,
      };

    default:
      return state;
  }
};
