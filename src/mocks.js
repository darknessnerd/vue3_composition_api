import moment from 'moment';

export const basePost = {
  title: 'Base post',
  html: '<p>content</p>',
  authorId: 1,
  created: moment(),
};

export const todayPost = {
  ...basePost,
  title: 'Today',
  id: 1,
};
export const thisWeekPost = {
  ...basePost,
  title: 'This week',
  created: moment().subtract(2, 'days'),
  id: 2,
};
export const thisMonthPost = {
  ...basePost,
  title: 'This Month',
  created: moment().subtract(2, 'weeks'),
  id: 3,
};
