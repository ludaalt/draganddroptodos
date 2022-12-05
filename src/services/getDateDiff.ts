export const getDateDiff = (startDate: string): number => {
  const secondDate = new Date();
  const firstDate = new Date(startDate.split('-').reverse().join('-'));
  const diff = Math.round((+secondDate - +firstDate) / (1000 * 60 * 60 * 24));
  return diff;
};
