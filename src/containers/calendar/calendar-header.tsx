import React from 'react';
// import { useDispatch } from 'react-redux';
// import { goNextWeek, goLastWeek, getWeek, getToday } from '../redux/modules/calendar';

// import '../style/pages/calendarHeader.scss';
import Pagination from 'src/containers/calendar/pagination';
// import { goLastWeek, goNextWeek } from 'src/reducers/calendar';
import Hint from 'src/containers/calendar/hint';
import MyDate from 'src/models/myDate';

export default function CalendarHeader(props: {
  week: MyDate[];
  today: MyDate;
  goNextWeek: () => void;
  goLastWeek: () => void;
}) {
  const { week, today, goNextWeek, goLastWeek } = props;

  const getCurrentWeekRange = () => {
    if (week.length) {
      const firstDayOfWeek = `${week[0].year}/${week[0].stringMonth}/${week[0].stringDate}`;
      const lastDayOfWeek = week[week.length - 1].stringDate;
      return `${firstDayOfWeek} - ${lastDayOfWeek}`;
    }
    return 'Oops, that seems occur an error.';
  };

  return (
    <div className="calendarHeader">
      <Pagination
        disabledPrev={week[0].key < today.key}
        goLast={goLastWeek}
        goNext={goNextWeek}
        weekRange={getCurrentWeekRange()}
      />
      <Hint />
    </div>
  );
}
