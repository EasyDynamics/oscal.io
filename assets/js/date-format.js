import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@3.3.0/+esm'

// This creates formats that look like "May 23, 2023, 5:30 PM EDT"
const DATE_FORMAT = { ...DateTime.DATETIME_MED, timeZoneName: 'short' };

// Find all elements with `data-date-time` set and update their text content
// to the formatted string.
(() => {
  document.querySelectorAll('[data-date-time]').forEach((dateField) => {
    dateField.textContent = DateTime
      .fromISO(dateField.dataset.dateTime)
      .toLocaleString(DATE_FORMAT);
  });
})()
