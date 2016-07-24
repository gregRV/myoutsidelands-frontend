import { combineReducers } from 'redux';
import schedule from './schedule';

const rootReducer = combineReducers({
  schedule
});

export default rootReducer;

// Selectors
export const getSchedule = (state) => {
  return state.schedule;
};
