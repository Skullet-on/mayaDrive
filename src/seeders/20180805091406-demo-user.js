module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'Vasya',
      email: 'vasya@gmail.com',
      password: '$2b$10$bEt6MCGxm40JZZ5CYC1dUOQM5LJYuAteUiAcseN/GU9jHkLUBOeu.',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Eugene',
      email: 'eugene@gmail.com',
      password: '$2b$10$ij3s0Y5WtAC2erzNHjee1u7/1f2OqpT0RASJRtFxyoIiiAFXr7zci',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'petya@gmail.com',
      password: '$2b$10$EREqbqZA2tyJebbSA6cIA.SMkQPSgDY9YJdNPytXAQDIEwR0gizHe',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
