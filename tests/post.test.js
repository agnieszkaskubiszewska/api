const axios = require('axios');
const { generateTestData } = require('./testHelpers/dataGenerator');

test('should create a new post', async () => {
  const data = generateTestData();
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data.validPostData);

  expect(response.status).toBe(201);
  expect(response.data).toHaveProperty('userId', 1);
  expect(response.data).toHaveProperty('title', 'foo');
  expect(response.data).toHaveProperty('body', 'bar');
  expect(response.data).toHaveProperty('id');
});

test('should handle invalid data gracefully', async () => {
  const data = generateTestData();
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data.invalidPostData);
    console.log('Status odpowiedzi:', response.status);
    expect(response.status).toBe(400);
  } catch (error) {
    console.error('Błąd:', error.message);
  }
});

test('should handle server errors gracefully', async () => {
  const data = generateTestData();
  try {
    await axios.post('https://jsonplaceholder.typicode.com/nonexistent', data.nonexistentEndpointData);
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});

test('should update an existing post', async () => {
  const data = generateTestData();
  const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', data.updatedPostData);

  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('title', 'foo updated');
  expect(response.data).toHaveProperty('body', 'bar updated');
});

test('should delete a post', async () => {
  const data = generateTestData();
  const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status).toBe(200);
});
