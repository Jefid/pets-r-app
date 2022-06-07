const { Post } = require('../models');

const postdata = [
  {
    title: 'Best Movie Ever.',
    post_url: 'https://en.wikipedia.org/wiki/Snakes_on_a_Plane',
    user_id: 3
  },
  {
    title: 'My favorite drink!',
    post_url: 'https://www.thrillist.com/drink/nation/snakebite-drink-recipe',
    user_id: 3
  },
  {
    title: 'Check out this store if you need snake supplies.',
    post_url: 'https://www.facebook.com/HullstreetPetstore',
    user_id: 1
  },
  {
    title: 'Love this song!',
    post_url: 'https://genius.com/Rem-the-sidewinder-sleeps-tonite-lyrics',
    user_id: 4
  },
  {
    title: 'Having a surprisingly decent season',
    post_url: 'https://www.mlb.com/dbacks',
    user_id: 3
  },
  {
    title: 'Python for Beginners.',
    post_url: 'https://www.python.org/about/gettingstarted/',
    user_id: 4
  },
  {
    title: 'Have you been to the zoo yet?',
    post_url: 'https://www.metrorichmondzoo.com/',
    user_id: 2
  },
  {
    title: 'Can we bring our pet snakes to the park?',
    post_url: 'https://maymont.org/visit/frequently-asked-questions/',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;