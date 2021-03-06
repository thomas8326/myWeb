import React from 'react';
import { classNames } from '../utils/classNames';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const HALF_OF_HOUR = 30;
const ONE_HOUR = 60;
const MILITARY_TIME = 24;

const propTypes = {
  availableTimes: PropTypes.array,
  bookedTimes: PropTypes.array,
  dateKey: PropTypes.number.isRequired,
  todayKey: PropTypes.number.isRequired,
  dayOfWeek: PropTypes.string,
  date: PropTypes.string
};

class DayViewer extends React.Component {
  constructor(props) {
    super(props);

    const { availableTimes, bookedTimes, dateKey, todayKey } = this.props;

    const todayAvailableTimes = availableTimes.flatMap(availableTime => this.getTime(availableTime, 'dayContainer-time_available'));
    const todayBookedTimes = bookedTimes.flatMap(bookedTimes => this.getTime(bookedTimes, 'dayContainer-time_disable'));

    this.state = {
      dayTimes: todayAvailableTimes.concat(todayBookedTimes).sort((prev, curr) => prev.value - curr.value),
      dateKey,
      todayKey
    }
  }

  dayTimeConverter(time) {
    const clock = time.clock < 10 ? '0' + time.clock : time.clock;
    const minute = time.minute < 10 ? '0' + time.minute : time.minute;
    return clock + ':' + minute;
  }

  getTime({ start, end }, className) {
    let current = start.time;
    const last = end.time;
    const result = [{ text: this.dayTimeConverter(start.time), className: className, value: start.clock * 100 + start.minute }];

    while (current.clock < last.clock) {
      const newCurrent = current.minute + HALF_OF_HOUR >= ONE_HOUR ? { clock: current.clock + 1, minute: 0 } : { clock: current.clock, minute: current.minute + HALF_OF_HOUR };

      if (newCurrent.clock !== MILITARY_TIME) {
        result.push({ text: this.dayTimeConverter(newCurrent), className: className, value: newCurrent.clock * 100 + newCurrent.minute });
      }

      current = newCurrent;
    }

    return result;
  }

  renderTeacherSchedule() {
    const { dayTimes, dateKey, todayKey } = this.state;

    if (dateKey < todayKey) {
      return;
    }

    return (
      <ul className="timeBoard fontSize-s">
        {dayTimes.map((time, index) => (<li key={index} className={time.className + " time"}>{time.text}</li>))}
      </ul>
    )
  }

  renderClassName() {
    const { dateKey, todayKey } = this.state;

    return classNames('dayContainer', { dayViewer_disable: dateKey < todayKey });
  }

  render() {
    const { dayOfWeek, date } = this.props;

    return (
      <div className={this.renderClassName()}>
        <div className="dateBoard">
          <div className="dayOfWeek textCenter fontSize-l"><FormattedMessage id={dayOfWeek} /></div>
          <div className="date textCenter fontSize-l">{date}</div>
        </div>
        {
          this.renderTeacherSchedule()
        }
      </div>
    );
  }
}

DayViewer.propTypes = propTypes;
export default DayViewer;
