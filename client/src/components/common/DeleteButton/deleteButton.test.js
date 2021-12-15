/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '../../../utils/test.utils';

import DeleteButton from './DeleteButton';

describe('Given the deleteFavoriteButton component', () => {
  render(<DeleteButton _id="1" token="1" />);

  test('when render the star icon should appear', () => {
    const addFavoriteButton = screen.getByPlaceholderText('delete-button');
    fireEvent.click(addFavoriteButton);
    expect(screen.getByPlaceholderText(/delete-button/i)).toBeInTheDocument();
  });
});
