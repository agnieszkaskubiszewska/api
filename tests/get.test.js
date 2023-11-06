const axios = require('axios');

test('should get a specific post', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  const data = response.data;

  expect(response.status).toBe(200);

  expect(data).toHaveProperty('userId', 1);
  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('title');
  expect(data).toHaveProperty('body');
});
test('should not find a post with an invalid ID', async () => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/posts/999999'); 
  } catch (error) {
    expect(error.response.status).toBe(404); 
  }
});
test('should not find a post with an invalid ID format', async () => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/posts/a'); 
  } catch (error) {
    expect(error.response.status).toBe(404); 
  }
});
test('should handle network errors gracefully', async () => {
  try {
    await axios.get('https://nonexistent-api-url.com'); 
  } catch (error) {
    expect(error.message).toContain('ENOTFOUND'); 
  }
});
