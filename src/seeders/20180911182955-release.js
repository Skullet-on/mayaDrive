module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('releases', [{
      url: "https://doc-00-8s-docs.googleusercontent.com/docs/securesc/ehp3pu1ih8oeokddj23hj56gk65osoan/2rpga9f26csnj7oigi26siojq89ghl2e/1536688800000/05626607987999881367/05626607987999881367/1bLwp9f8G0evbuBUMDdM0bojICkuXDzw2?e=download",
      version: "0.1.67",
      date: "2013-11-20 00:00:00.000 +00:00",
      whatsnew: "Initial public beta",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: "https://doc-00-8s-docs.googleusercontent.com/docs/securesc/ehp3pu1ih8oeokddj23hj56gk65osoan/2rpga9f26csnj7oigi26siojq89ghl2e/1536688800000/05626607987999881367/05626607987999881367/1bLwp9f8G0evbuBUMDdM0bojICkuXDzw2?e=download",
      version: "0.1.90",
      date: "2014-01-01 00:00:00.000 +00:00",
      whatsnew: "Added checksum validation for uploaded files\nPerformance improvements\nVarious bug fixess",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: "https://doc-00-8s-docs.googleusercontent.com/docs/securesc/ehp3pu1ih8oeokddj23hj56gk65osoan/2rpga9f26csnj7oigi26siojq89ghl2e/1536688800000/05626607987999881367/05626607987999881367/1bLwp9f8G0evbuBUMDdM0bojICkuXDzw2?e=download",
      version: "0.1.99",
      date: "2014-01-31 00:00:00.000 +00:00",
      whatsnew: "Kernel memory manager improved\nVarious bug fixes",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: "https://doc-00-8s-docs.googleusercontent.com/docs/securesc/ehp3pu1ih8oeokddj23hj56gk65osoan/2rpga9f26csnj7oigi26siojq89ghl2e/1536688800000/05626607987999881367/05626607987999881367/1bLwp9f8G0evbuBUMDdM0bojICkuXDzw2?e=download",
      version: "0.1.102",
      date: "2014-02-02 00:00:00.000 +00:00",
      whatsnew: "Fixed access to MayaDrive shared folders from Admin account\nVarious bug fixes",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: "https://doc-00-8s-docs.googleusercontent.com/docs/securesc/ehp3pu1ih8oeokddj23hj56gk65osoan/2rpga9f26csnj7oigi26siojq89ghl2e/1536688800000/05626607987999881367/05626607987999881367/1bLwp9f8G0evbuBUMDdM0bojICkuXDzw2?e=download",
      version: "0.1.182",
      date: "2018-02-23 00:00:00.000 +00:00",
      whatsnew: "Windows 10 support\nCompletely redesigned GUI\nMultiupload\nShell integration and file sharing\nVarious fixes and improvements",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('releases', null, {});
  }
};
