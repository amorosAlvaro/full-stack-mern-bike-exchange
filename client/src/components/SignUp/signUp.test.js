import { render, screen, fireEvent } from '../../utils/test.utils';
import SingUp from './SignUp';

describe('Given the component Login', () => {
  test('The component is rendered', () => {
    render(<SingUp />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });
  test('handleChange gets data', () => {
    render(<SingUp />);

    const inputUserName = screen.getByPlaceholderText('User Name');
    const inputName = screen.getByPlaceholderText('Name');
    const inputSurname = screen.getByPlaceholderText('Surname');
    const inputMail = screen.getByPlaceholderText('mail');
    const inputPhone = screen.getByPlaceholderText('phone');
    const inputProvince = screen.getByPlaceholderText('Province');
    const inputPassword = screen.getByPlaceholderText('Password');

    fireEvent.change(inputUserName, { target: { value: 'alvaro' } });
    fireEvent.change(inputName, { target: { value: 'aa' } });
    fireEvent.change(inputSurname, { target: { value: 'amoros' } });
    fireEvent.change(inputMail, { target: { value: 'amoros@' } });
    fireEvent.change(inputPhone, { target: { value: '617' } });
    fireEvent.change(inputProvince, { target: { value: 'madrid' } });
    fireEvent.change(inputPassword, { target: { value: '123' } });

    expect(inputUserName.value).toBe('alvaro');
    expect(inputName.value).toBe('aa');
    expect(inputSurname.value).toBe('amoros');
    expect(inputMail.value).toBe('amoros@');
    expect(inputPhone.value).toBe('617');
    expect(inputProvince.value).toBe('madrid');
    expect(inputPassword.value).toBe('123');
  });
});
