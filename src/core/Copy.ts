export function useCopy(src) {
  return Object.create(
    Object.getPrototypeOf(src),
    Object.getOwnPropertyDescriptors(src),
  );
}
