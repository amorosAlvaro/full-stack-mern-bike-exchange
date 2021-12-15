import axios from 'axios';

import { registerUser } from './user.services';

jest.mock('axios');

describe('When register user is called', () => {
  const token = '11';
  const user = {
    name: '2',
    password: {}
  };

  test('function is called', () => {
    axios.post.mockResolvedValue(Promise.resolve(user));
    registerUser();
  });
});
