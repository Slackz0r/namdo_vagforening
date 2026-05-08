//Format date
export const formatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};
