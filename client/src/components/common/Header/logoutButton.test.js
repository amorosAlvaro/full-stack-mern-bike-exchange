/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '../../../utils/test.utils';
import LogoutButton from './LogoutButton';

describe('Given the deleteFavoriteButton component', () => {
  render(<LogoutButton />);

  test('when render the star icon should appear', () => {
    const addFavoriteButton = screen.getByPlaceholderText('logout-button');
    fireEvent.click(addFavoriteButton);
    expect(screen.getByPlaceholderText(/logout-button/i)).toBeInTheDocument();
  });
});
