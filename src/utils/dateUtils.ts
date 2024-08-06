export const formatDateString = (dateTimeString: string): string =>

{const date = new Date(dateTimeString);

// Format the date using toLocaleString
const formattedDate = date.toLocaleString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
return formattedDate;
}