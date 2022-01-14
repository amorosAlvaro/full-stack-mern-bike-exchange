import { render, screen, fireEvent } from '../../utils/test.utils';
import AddBike from './Addbike';

describe('Given the component Addbike', () => {
  describe('when component is instantiated', () => {
    render(<AddBike />);
    test('then it should be rendered', () => {
      expect(screen.getByText(/Custom/i)).toBeInTheDocument();
      expect(screen.getAllByRole('button')).toHaveLength(2);
    });
  });

  test('handleChange gets data', () => {
    render(<AddBike />);
    const makeField = screen.getByPlaceholderText('make-field');
    const saveButton = screen.getByPlaceholderText('save-button');

    fireEvent.change(makeField, { target: { value: 'honda' } });
    fireEvent.click(saveButton);

    expect(makeField.value).toBe('honda');
  });
});
