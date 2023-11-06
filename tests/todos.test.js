const axios = require('axios');
const { generateTestData } = require('./testHelpers/dataGenerator');


describe('/todos', function() {

  test('should get list of all existing todos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    expect(response.status).toBe(200);
  });

  test('should get specific todos from list', async () => {
    const data = generateTestData();
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    expect(response.status).toBe(200);
    expect(response.data.userId).toBe(1)
    expect(typeof response.data.userId).toBe('number')    
    expect(response.data.title).toBe('delectus aut autem')
    expect(typeof response.data.title).toBe('string')
    expect(response.data.completed).toBe(false)
    expect(typeof response.data.completed).toBe('boolean')
  });

test('should update an existing post', async () => {
    const data = generateTestData();
    const response = await axios.put('https://jsonplaceholder.typicode.com/todos/1', data.updatedPostData);

    expect(response.status).toBe(200);
    expect(response.data.title).toBe('foo updated')
  });

});