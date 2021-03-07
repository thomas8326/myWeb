import { HALF_OF_HOUR, ONE_DAY_CLOCK, ONE_HOUR } from 'src/constants/constants';

export default class MyDate {
  key!: number;

  year!: number;

  month!: number;

  date!: number;

  day!: number;

  stringMonth!: string;

  stringDate!: string;

  dayOfWeek!: string;

  minuteOfDay: { text: string; value: number }[] = [];

  constructor(date?: Date) {
    const newDate = date ?? new Date();
    this.year = newDate.getFullYear();
    this.month = newDate.getMonth() + 1;
    this.date = newDate.getDate();
    this.day = newDate.getDay();
    this.stringMonth = this.generateStringMonth(newDate);
    this.stringDate = this.generateStringDate(newDate);
    this.key = this.generateKey(newDate);
    this.minuteOfDay = this.generateMinuteOfDay(0, 0);
    this.dayOfWeek = '';
  }

  private generateStringMonth = (date: Date) => {
    const correctMonth = date.getMonth() + 1;
    return correctMonth < 10 ? `0${correctMonth}` : correctMonth.toString();
  };

  private generateStringDate = (date: Date): string =>
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();

  private generateKey(date: Date) {
    return parseInt(`${date.getFullYear()}${this.stringMonth}${this.stringDate}`, 10);
  }

  private generateMinuteOfDay = (startClock: number, startMinute: number): { text: string; value: number }[] => {
    let start = { clock: startClock, minute: startMinute };

    const dayTimeConverter = (clock: number, minute: number) => {
      const clockString = clock < 10 ? `0${clock}` : clock;
      const minuteString = minute < 10 ? `0${minute}` : minute;
      return `${clockString}:${minuteString}`;
    };

    const result = [{ text: dayTimeConverter(startClock, startMinute), value: startClock * 100 + startMinute }];

    while (start.clock < ONE_DAY_CLOCK) {
      const newCurrent =
        start.minute + HALF_OF_HOUR >= ONE_HOUR
          ? { clock: start.clock + 1, minute: 0 }
          : { clock: start.clock, minute: start.minute + HALF_OF_HOUR };

      if (newCurrent.clock !== ONE_DAY_CLOCK) {
        result.push({
          text: dayTimeConverter(newCurrent.clock, newCurrent.minute),
          value: newCurrent.clock * 100 + newCurrent.minute,
        });
      }

      start = newCurrent;
    }

    return result;
  };
}
