export default function throttle<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let last: number;
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    const now = +new Date();

    if (last && now < last + timeout) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        func(...args);
      }, timeout);
    } else {
      last = now;
      func(...args);
    }
  };
}
