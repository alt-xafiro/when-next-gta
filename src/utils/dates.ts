import { DateTime } from 'luxon';

export const getDaysFromRightNow = (dateTime: DateTime) => {
  return Math.floor(dateTime.diffNow('days').days);
};
