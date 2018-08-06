module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'Vasya',
      email: 'vasya@gmail.com',
      password_digest: 'vasya',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Eugene',
      email: 'eugene@gmail.com',
      password_digest: 'eugene',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'petya@gmail.com',
      password_digest: 'petya',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
