import React from 'react';
import MyDate from 'src/models/myDate';
import styled, { css } from 'styled-components';

const OneDayColumn = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
  border-top: 4px solid var(--primary-color);
  ${(props: { disabled: boolean }) =>
    props.disabled &&
    css`
      border-color: var(--primary-disable-color);
    `}
`;

const CalendarTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
`;

export default function DayViewer(props: { date: MyDate; today: MyDate }) {
  const { date, today } = props;

  return (
    <OneDayColumn disabled={date.key < today.key}>
      <div className="dayOfWeek textCenter fontSize-l">{date.dayOfWeek}</div>
      <div className="date textCenter fontSize-l">{date.date}</div>
      <ul className="reset-ul">
        {date.minuteOfDay.map((hour) => (
          <CalendarTime key={hour.value}>{hour.text}</CalendarTime>
        ))}
      </ul>
    </OneDayColumn>
  );
}
