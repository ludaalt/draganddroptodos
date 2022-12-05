export const getCurrentDate = (): string => {
  const newDate = new Date();
  return [
    newDate.getDate().toString().padStart(2, '0'),
    (newDate.getMonth() + 1).toString().padStart(2, '0'),
    newDate.getFullYear(),
  ].join('-');
};
