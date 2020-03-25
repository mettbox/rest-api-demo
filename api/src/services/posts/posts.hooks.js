

const processPost = require('../../hooks/process-post');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processPost()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
