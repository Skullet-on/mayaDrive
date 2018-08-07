module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'Vasya',
      email: 'vasya@gmail.com',
      password: '$2y$12$dJpgagNaIrWxhLKWuN4A..qgsm.zm79AX06hGIhd1/rAHRHn22tkS',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Eugene',
      email: 'eugene@gmail.com',
      password: '$2y$12$1LxM8WHBDWJI7MSuPGMFqufkVQhvvHV1XG42amLZgtZmoj2yjCjtW',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'petya@gmail.com',
      password: '$2y$12$8VJp9YbbqzAbSuKbBl.A2O5.8ooEgbe162e0nvCS151SbAqcuhLqG',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
