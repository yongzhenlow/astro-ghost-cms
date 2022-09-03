/**
 * Formats a new Date object using Intl.DateTimeFormat
 *
 * @param {Date} date Date object to be formatted
 * @param {Intl.DateTimeFormatOptions} options Options to pass to the formatter
 * @param {string} locale A string with a BCP 47 language tag
 * @returns {string}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 */

const dateFormat = (
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  locale: string = 'en-SG'
) => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export default dateFormat;
