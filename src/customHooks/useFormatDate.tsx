export const useFormatDate = (dateString: Date) => {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("ru-RU").format(new Date(date));

  return formattedDate;
};
