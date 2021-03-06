import MyDate from 'src/models/myDate';

export function getWeek(newMyDate?: MyDate): MyDate[] {
  const myDate = newMyDate || new MyDate();
  const firstDayOfWeek = myDate.date - myDate.day;
  const lastDayOfWeek = firstDayOfWeek + 6;
  const dayOfWeekMap = new Map([
    [0, 'sun'],
    [1, 'mon'],
    [2, 'tue'],
    [3, 'wed'],
    [4, 'thu'],
    [5, 'fri'],
    [6, 'sat'],
  ]);

  const week = new Array(lastDayOfWeek - firstDayOfWeek + 1).fill(-1).map((_, index) => {
    const date = new Date(myDate.year, myDate.month - 1, myDate.date);
    date.setDate(firstDayOfWeek + index);
    const tempDate = new MyDate(date);

    return Object.assign(new MyDate(), tempDate, { dayOfWeek: dayOfWeekMap.get(index) });
  });

  return week;
}

export default this;
