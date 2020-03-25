// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data } = context;

    // Throw an error if we didn't get a title and text
    if(!data.title) {
      throw new Error('A post must have a title');
    }
    if(!data.text) {
      throw new Error('A post must have a text');
    }

    // Make sure that title are no longer than 300 characters
    const title = data.title.substring(0, 300);

    const text = data.text;

    // Update the original data (so that people can't submit additional stuff)
    context.data = {
      title,
      text,
      createdAt: new Date().getTime()
    };

    return context;
  };
};
