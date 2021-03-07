import React, { useState } from 'react';
import CalendarHeader from 'src/containers/calendar/calendar-header';
// import { useDispatch } from 'react-redux';
import DayViewer from 'src/containers/calendar/day-viewer';
import MyDate from 'src/models/myDate';
import { getWeek } from 'src/utils/date.util';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0;
`;

export default function Calendar() {
  const [week, setWeek] = useState<MyDate[]>(getWeek(new MyDate()));
  const [today] = useState<MyDate>(new MyDate());

  const goLastWeek = () => {
    const startDateOfWeek = week[0];
    const date = new Date(startDateOfWeek.year, startDateOfWeek.month - 1, startDateOfWeek.date - 7);

    setWeek(getWeek(new MyDate(date)));
  };

  const goNextWeek = () => {
    const endDateOfWeek = week[week.length - 1];
    const date = new Date(endDateOfWeek.year, endDateOfWeek.month - 1, endDateOfWeek.date + 1);

    setWeek(getWeek(new MyDate(date)));
  };

  return (
    <>
      <CalendarHeader week={week} today={today} goLastWeek={goLastWeek} goNextWeek={goNextWeek} />
      <CalendarContainer>
        {week.map((date: MyDate) => (
          <DayViewer key={date.key} date={date} today={today} />
        ))}
      </CalendarContainer>
    </>
  );
}
