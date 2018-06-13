module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('news', [{
      title: 'test title',
      ntext: 'some text',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'title two',
      ntext: 'another text for news',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Wow! Its work!',
      ntext: 'Super! You did it!',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('news', null, {});
  }
};
