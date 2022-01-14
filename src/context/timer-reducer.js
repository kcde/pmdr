import { ADD_SETTINGS } from './timer-actions';
export const timerReducer = (state, action) => {
  switch (action.type) {
    case ADD_SETTINGS:
      return {};

    default:
      return state;
  }
};
