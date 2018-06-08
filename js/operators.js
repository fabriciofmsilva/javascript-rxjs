export const debounceTime = (milliseconds, fn) => {
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, milliseconds);
  };
};
  
export const take = (times, fn) => {
  let requestCounter = 0;
  return () => {
    requestCounter++;
    if (requestCounter <= times) fn();
  };
};
