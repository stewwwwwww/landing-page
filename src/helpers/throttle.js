const throttle = (fn, delay) => {
  let waiting;
  return (...args) => {
    if (!waiting) {
      waiting = setTimeout(() => {
        fn(...args);
        waiting = null;
      }, delay);
    }
  };
};
export default throttle;