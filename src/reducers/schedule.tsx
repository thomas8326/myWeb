export {};
// import { MyDate } from '../../entity/date';

// // Constants
// export const FETCH_TEACHER_SCHEDULE = 'FETCH_TEACHER_SCHEDULE';

// Action Creators
// export function fetchTeacherSchedule({ availableTimes, bookedTimes }) {
//   const timeConverter = (times) => {
//     return times.map(({ start, end }) => {
//       const startTime = new MyDate(start);
//       const endTime = new MyDate(end);

//       return {
//         start: {
//           fullDate: startTime.getFullDate(),
//           time: {
//             clock: startTime.getHours(),
//             minute: startTime.getMinutes(),
//           }
//         },
//         end: {
//           fullDate: endTime.getFullDate(),
//           time: {
//             clock: endTime.getHours(),
//             minute: endTime.getMinutes(),
//           }
//         },
//       }
//     })
//   }

//   return {
//     type: FETCH_TEACHER_SCHEDULE,
//     availableTimes: timeConverter(availableTimes),
//     bookedTimes: timeConverter(bookedTimes)
//   };
// }

// Reducer
// export const defaultState = {
//   availableTimes: [],
//   bookedTimes: [],
// };

// export default function teacherScheduleReducer(state = defaultState, action) {
//   switch (action.type) {
//     case FETCH_TEACHER_SCHEDULE:
//       return {
//         ...state,
//         availableTimes: action.availableTimes,
//         bookedTimes: action.bookedTimes,
//       };
//     default:
//       return state;
//   }
// }

// export const getAvailableTimes = state => state.teacherSchedule.availableTimes;
// export const getBookedTimes = state => state.teacherSchedule.bookedTimes;
