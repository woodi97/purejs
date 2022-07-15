export function useDeepCopy(src) {
  return Object.create(
    Object.getPrototypeOf(src),
    Object.getOwnPropertyDescriptors(src),
  );
}
