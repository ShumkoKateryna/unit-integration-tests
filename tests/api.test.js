// tests/api.test.js
jest.mock('axios'); // Мокуємо axios
const axios = require('axios');
const fetchPosts = require('../src/api'); 

test('Отримання постів зі стороннього API з моками', async () => {
    // Створюємо моковану відповідь
    const mockedResponse = [{ id: 1, title: 'Post 1' }];
    
    // Визначаємо, що axios має повернути при виклику
    axios.get.mockResolvedValue({ data: mockedResponse });

    // Викликаємо функцію, яка робить запит
    const posts = await fetchPosts();

    // Перевіряємо, що повернений результат такий, як ми очікуємо
    expect(posts).toBe(mockedResponse);
    expect(posts[0]).toHaveProperty('id'); // Перевірка структури
});
