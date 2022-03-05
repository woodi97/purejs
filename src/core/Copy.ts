export function useCopy(src: Object) {
  return Object.create(
    Object.getPrototypeOf(src),
    Object.getOwnPropertyDescriptors(src)
  );
}
