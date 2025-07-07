export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("nl-NL", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(date);
};
