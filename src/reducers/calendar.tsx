import ReduxAction from 'src/models/action';
import MyDate from 'src/models/myDate';

// Constants
export const FETCH_CURRENT_WEEK = 'FETCH_CURRENT_WEEK';
export const FETCH_WEEK = 'FETCH_WEEK';
export const GO_NEXT_WEEK = 'GO_NEXT_WEEK';
export const GO_LAST_WEEK = 'GO_LAST_WEEK';

// export const constants = { };

// Action Creators

export function fetchWeek() {
  const current = new MyDate();
  return {
    type: FETCH_WEEK,
    today: current.getFullDate(),
    week: current.getWeek(),
  };
}

export function goLastWeek(currentWeek: any[]) {
  const myDate = new MyDate();
  const startDateOfWeek = currentWeek[0].fullDate;
  const lastWeek = myDate.getWeek(new MyDate(startDateOfWeek.year, startDateOfWeek.month, startDateOfWeek.date - 7));
  return {
    type: GO_LAST_WEEK,
    week: lastWeek,
  };
}

export function goNextWeek(currentWeek: any[]) {
  const myDate = new MyDate();
  const endDateOfWeek = currentWeek[currentWeek.length - 1].fullDate;
  const nextWeek = myDate.getWeek(new MyDate(endDateOfWeek.year, endDateOfWeek.month, endDateOfWeek.date + 1));
  return {
    type: GO_NEXT_WEEK,
    week: nextWeek,
  };
}

// Reducer
export const defaultState = {
  today: {},
  week: [],
};

export default function calendarReducer(state = defaultState, action: ReduxAction<{ today: any; week: any }>) {
  switch (action.type) {
    case FETCH_WEEK:
      return {
        ...state,
        today: action.object.today,
        week: action.object.week,
      };
    case GO_NEXT_WEEK:
    case GO_LAST_WEEK:
      return {
        ...state,
        week: action.object.week,
      };
    default:
      return state;
  }
}
// export const getToday = (state) => state.calendar.today;
// export const getWeek = (state) => state.calendar.week;
