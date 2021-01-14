import moment from 'moment';

const basePost = {
  id: 1,
  title: 'Base post',
  html: '<p>content</p>',
  authorId: 1,
  created: moment(),
};

export const todayPost = {
  ...basePost,
  title: 'Today',
};
export const thisWeekPost = {
  ...basePost,
  title: 'This week',
  created: moment().subtract(2, 'days'),
};
export const thisMonthPost = {
  ...basePost,
  title: 'This Month',
  created: moment().subtract(2, 'weeks'),
};
