export const getFormattedDate = (date: Date) => {
  const dayName = date.toLocaleDateString('en-IN', { weekday: 'long' });
  const day = date.toLocaleDateString('en-IN', { day: 'numeric' });
  const month = date.toLocaleDateString('en-IN', { month: 'short' });
  return `${dayName}, ${day} ${month}`;
};