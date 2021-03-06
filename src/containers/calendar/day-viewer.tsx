import React from 'react';

import classNames from 'classnames';

// const HALF_OF_HOUR = 30;
// const ONE_HOUR = 60;
// const MILITARY_TIME = 24;

export default function DayViewer(props: { dateKey: any; todayKey: any; date: any }) {
  const { dateKey, todayKey, date } = props;
  // const todayAvailableTimes = availableTimes.flatMap((availableTime: any) =>
  //   getTime(availableTime, 'dayContainer-time_available'),
  // );
  // const todayBookedTimes = bookedTimes.flatMap((bookedTimes: any) => getTime(bookedTimes, 'dayContainer-time_disable'));

  // this.state = {
  //   dayTimes: todayAvailableTimes.concat(todayBookedTimes).sort((prev, curr) => prev.value - curr.value),
  //   dateKey,
  //   todayKey,
  // };

  // const dayTimeConverter = (time: any) => {
  //   const clock = time.clock < 10 ? `0${time.clock}` : time.clock;
  //   const minute = time.minute < 10 ? `0${time.minute}` : time.minute;
  //   return `${clock}:${minute}`;
  // };

  // const getTime = (data: { start: any; end: any }, className: any) => {
  //   const { start, end } = data;
  //   let current = start.time;
  //   const last = end.time;
  //   const result = [{ text: dayTimeConverter(start.time), className, value: start.clock * 100 + start.minute }];

  //   while (current.clock < last.clock) {
  //     const newCurrent =
  //       current.minute + HALF_OF_HOUR >= ONE_HOUR
  //         ? { clock: current.clock + 1, minute: 0 }
  //         : { clock: current.clock, minute: current.minute + HALF_OF_HOUR };

  //     if (newCurrent.clock !== MILITARY_TIME) {
  //       result.push({
  //         text: dayTimeConverter(newCurrent),
  //         className,
  //         value: newCurrent.clock * 100 + newCurrent.minute,
  //       });
  //     }

  //     current = newCurrent;
  //   }

  //   return result;
  // };

  // const renderTeacherSchedule = () => (
  //   // if (dateKey < todayKey) {
  //   //   return;
  //   // }

  //   <ul className="timeBoard fontSize-s">
  //     {dayTimes.map((time, index) => (
  //       <li key={index} className={`${time.className} time`}>
  //         {time.text}
  //       </li>
  //     ))}
  //   </ul>
  // );
  const renderClassName = () => classNames('dayContainer', { dayViewer_disable: dateKey < todayKey });

  return (
    <div className={renderClassName()}>
      <div className="dateBoard">
        <div className="dayOfWeek textCenter fontSize-l">{/* <FormattedMessage id={dayOfWeek} /> */}</div>
        <div className="date textCenter fontSize-l">{date}</div>
      </div>
      {/* {renderTeacherSchedule()} */}
    </div>
  );
}
