export default class MyDate extends Date {
  dayOfWeekMap = new Map([
    [0, 'sun'],
    [1, 'mon'],
    [2, 'tue'],
    [3, 'wed'],
    [4, 'thu'],
    [5, 'fri'],
    [6, 'sat'],
  ]);

  getStringMonth() {
    const correctMonth = super.getMonth() + 1;
    return correctMonth < 10 ? `0${correctMonth}` : correctMonth.toString();
  }

  getStringDate() {
    return super.getDate() < 10 ? `0${super.getDate()}` : super.getDate().toString();
  }

  getKey() {
    return parseInt(`${this.getFullYear()}${this.getStringMonth()}${this.getStringDate()}`, 10);
  }

  getFullDate() {
    return {
      key: this.getKey(),
      year: this.getFullYear(),
      month: this.getMonth(),
      date: this.getDate(),
      stringMonth: this.getStringMonth(),
      stringDate: this.getStringDate(),
    };
  }

  getWeek(newMyDate?: MyDate) {
    const myDate = newMyDate || new MyDate();
    const firstDayOfWeek = myDate.getDate() - myDate.getDay();
    const lastDayOfWeek = firstDayOfWeek + 6;

    const week = new Array(lastDayOfWeek - firstDayOfWeek + 1).map((_, index) => {
      const tempDate = new MyDate(myDate);
      tempDate.setDate(firstDayOfWeek + index);
      return {
        fullDate: tempDate.getFullDate(),
        dayOfWeek: this.dayOfWeekMap.get(index),
      };
    });

    return week;
  }
}
