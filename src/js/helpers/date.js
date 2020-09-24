import { format, getDay, getMonth, getYear } from 'date-fns';

/**
 *
 * @param { String } str
 *
 */

export function formatDate(str) {
  const day = format(new Date(str), 'dd');
  const month = format(new Date(str),'MM');
  const year = format(new Date(str), 'yyyy');

  const date = {
    date_of_birth_day: day,
    date_of_birth_month: month,
    date_of_birth_year: year,
  };

  return date;
}
