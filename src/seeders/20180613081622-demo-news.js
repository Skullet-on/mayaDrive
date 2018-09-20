module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('News', [{
      title: 'test title',
      text: 'some text',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'title two',
      text: 'another text for news',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Wow! Its work!',
      text: 'Super! You did it!',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('News', null, {});
  }
};
