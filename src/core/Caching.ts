export const useCache = (fn) => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      return cache[value];
    } else {
      let result = fn(value);
      cache[value] = result;
      return result;
    }
  };
};
