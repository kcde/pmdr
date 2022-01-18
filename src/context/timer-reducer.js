import { ADD_SETTINGS, ADD_TIMER } from './timer-actions';
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

    default:
      return state;
  }
};
