/* eslint-disable import/no-unresolved */
import { render, screen, fireEvent } from '../../utils/test.utils';
import AddBike from './AddBike';

describe('Given the component Addbike', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(

        <AddBike />
      );

      expect(screen.getByText(/Custom/i)).toBeInTheDocument();
      expect(screen.getByText(/Naked/i)).toBeInTheDocument();
      expect(screen.getByText(/Sports/i)).toBeInTheDocument();
      expect(screen.getByText(/Turismo/i)).toBeInTheDocument();
    });
  });
});

test('Save data button is rendered', () => {
  render(<AddBike />);
  const saveButton = screen.getByPlaceholderText('save-button');

  fireEvent.click(saveButton);
});

// test('toggle function', () => {
//   render(<AddBike />);

//   const checkbox = screen.getByPlaceholderText('checkbox');
//   fireEvent.change(checkbox, { target: { value: 1 } });

//   const isChecked = checkbox.checked;
//   fireEvent.click(checkbox, {
//     target: { checked: 1 }
//   });
//   expect(checkbox.checked).toEqual(isChecked);
// });
