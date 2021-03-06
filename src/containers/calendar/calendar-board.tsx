import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DayViewer from 'src/containers/calendar/day-viewer';
import '../style/pages/calendar.scss';

export default function Calendar(props: { availableTimes: any[]; bookedTimes: any[]; week: any; today: any }) {
  const { availableTimes, bookedTimes, week, today } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchSchedule());
  }, []);

  useEffect(() => {
    dispatch(fetchWeek());
  }, []);

  return (
    <div className="calendar">
      {week.map((day: any) => (
        <DayViewer
          key={day.fullDate.key}
          dayOfWeek={day.dayOfWeek}
          date={day.fullDate.stringDate}
          dateKey={day.fullDate.key}
          todayKey={today.key}
          availableTimes={availableTimes.filter((time) => time.start.fullDate.key === day.fullDate.key)}
          bookedTimes={bookedTimes.filter((time) => time.start.fullDate.key === day.fullDate.key)}
        />
      ))}
    </div>
  );
}
