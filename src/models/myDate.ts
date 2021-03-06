export default class MyDate {
  key!: number;

  year!: number;

  month!: number;

  date!: number;

  day!: number;

  stringMonth!: string;

  stringDate!: string;

  dayOfWeek!: string;

  constructor(date?: Date) {
    const newDate = date ?? new Date();
    // eslint-disable-next-line no-debugger
    // debugger;

    this.year = newDate.getFullYear();
    this.month = newDate.getMonth() + 1;
    this.date = newDate.getDate();
    this.day = newDate.getDay();
    this.stringMonth = this.generateStringMonth(newDate);
    this.stringDate = this.generateStringDate(newDate);
    this.key = this.generateKey(newDate);
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
}
