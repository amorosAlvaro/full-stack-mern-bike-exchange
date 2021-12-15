import { render, screen, fireEvent } from '../../utils/test.utils';

import Login from './Login';

describe('Given the component Login', () => {
  test('The component is rendered', () => {
    render(<Login />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
  test('handlechange gets data', () => {
    render(<Login />);

    const inputUserName = screen.getByPlaceholderText('User Name');
    const inputPassword = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByPlaceholderText('login');

    fireEvent.change(inputUserName, { target: { value: 'alvaro' } });
    fireEvent.change(inputPassword, { target: { value: '123' } });
    fireEvent.click(loginButton);

    expect(inputUserName.value).toBe('alvaro');
    expect(inputPassword.value).toBe('123');
  });
});
