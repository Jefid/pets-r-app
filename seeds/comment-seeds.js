const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Cool.',
    user_id: 2,
    post_id: 5
  },
  {
    comment_text: 'Awesome.',
    user_id: 1,
    post_id: 4
  },
  {
    comment_text: 'Probably not.',
    user_id: 4,
    post_id: 7
  },
  {
    comment_text: 'are you kidding me?',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'No way.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Not likely.',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: 'Agreed!',
    user_id: 1,
    post_id: 4
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;