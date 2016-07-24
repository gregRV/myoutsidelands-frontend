export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';

export default function (state = [], action) {
  switch (action.type) {
    case UPDATE_SCHEDULE: return action.schedule;
    default: return state;
  };
}

export function updateSchedule(schedule) {
  return {
    type: UPDATE_SCHEDULE,
    schedule
  };
}
