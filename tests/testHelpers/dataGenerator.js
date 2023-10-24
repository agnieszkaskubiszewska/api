// testHelpers/dataGenerator.js

function generateTestData() {
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
  
    return {
      validPostData: postData,
      invalidPostData: {
        title: 'foo',
      },
      nonexistentEndpointData: postData,
      updatedPostData: {
        title: 'foo updated',
        body: 'bar updated',
        userId: 1,
      },
    };
  }
  
  module.exports = {
    generateTestData,
  };
  