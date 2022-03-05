export const useCache = (fn) => {
  const cache = {};
  return (value) => {
    if (value in cache) {
      return cache[value];
    }
    const result = fn(value);
    cache[value] = result;
    return result;
  };
};
