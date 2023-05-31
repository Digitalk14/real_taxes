export const addSpaces = (number) => {
  const sumToString = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return sumToString;
};
