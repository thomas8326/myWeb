import React, { useEffect, useState } from 'react';
import CalendarHeader from 'src/containers/calendar/calendar-header';
// import { useDispatch } from 'react-redux';
import DayViewer from 'src/containers/calendar/day-viewer';

export default function Calendar() {
  const [week] = useState<any[]>([]);
  const [today] = useState({ key: '123' });
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchSchedule());
  }, []);

  useEffect(() => {
    // dispatch(fetchWeek());
  }, []);

  return (
    <>
      <CalendarHeader week={week} today={today} />
      <div className="calendar">
        {week.map((day: any) => (
          <DayViewer
            key={day.fullDate.key}
            // dayOfWeek={day.dayOfWeek}
            date={day.fullDate.stringDate}
            dateKey={day.fullDate.key}
            todayKey={today.key}
            // availableTimes={availableTimes.filter((time) => time.start.fullDate.key === day.fullDate.key)}
            // bookedTimes={bookedTimes.filter((time) => time.start.fullDate.key === day.fullDate.key)}
          />
        ))}
      </div>
    </>
  );
}
