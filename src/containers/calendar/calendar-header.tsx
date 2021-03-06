import React from 'react';
import { useDispatch } from 'react-redux';
// import { goNextWeek, goLastWeek, getWeek, getToday } from '../redux/modules/calendar';

// import '../style/pages/calendarHeader.scss';
import classNames from 'classnames';
import Pagination from 'src/containers/calendar/pagination';
import { goLastWeek, goNextWeek } from 'src/reducers/calendar';
import Hint from 'src/containers/calendar/hint';

export default function CalendarHeader(props: { week: any[]; today: any }) {
  const { week, today } = props;
  const dispatch = useDispatch();

  const getCurrentWeekRange = () => {
    if (week.length) {
      const firstDayOfWeek = week[0];
      return `${firstDayOfWeek.fullDate.year}/${firstDayOfWeek.fullDate.stringMonth}/${
        firstDayOfWeek.fullDate.stringDate
      } - ${week[week.length - 1].fullDate.stringDate}`;
    }
    return 'Oops, that seems occur an error.';
  };

  const renderLastWeekClass = () => {
    if (!week.length) {
      return '';
    }
    return classNames({ lastButton_disabled: week[0].fullDate.key < today.key });
  };

  return (
    <div className="calendarHeader">
      <Pagination
        lastWeekButtonClass={renderLastWeekClass()}
        goLast={() => dispatch(goLastWeek())}
        goNext={() => dispatch(goNextWeek())}
        weekRange={getCurrentWeekRange()}
      />
      <Hint />
    </div>
  );
}
