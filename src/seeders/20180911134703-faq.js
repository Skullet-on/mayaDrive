module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('faqs', [{
      question: "What operating systems are supported?",
      answer: "Our product supports all modern OS'es including: Windows 7, Windows 8, Windows 8.1, Windows Server 2008 R2, Windows Server 2012 and Windows Server 2012 R2.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Are you planning to add Windows XP/2003 support?",
      answer: "No.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "What about other cloud storage services, like Mega, Google, Azure, etc. ?",
      answer: "We are working on adding these services. Keep tuned. ",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "How long the product will be in beta stage?",
      answer: "6 - 12 months.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "What will be the final price of your product?",
      answer: "9.95$ per year for personal use and 19.95$ for corporate. We'd like also remind you that all of our active beta testers will be granted with a free lifetime license!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "How do I become a beta tester?",
      answer: "Download the product and start using it! Simple submit a pithy bug or feature request report and you're done!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Is there any time limit for using beta version?",
      answer: "Yes. Each build is operating for 1 months since publishing.",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('faqs', null, {});
  }
};
