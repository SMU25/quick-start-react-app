export const getArrayNumbers = (length = 3) =>
  Array.from({ length }).map((_, index) => index + 1);
