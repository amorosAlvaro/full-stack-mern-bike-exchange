import { render, screen, fireEvent } from '../../../utils/test.utils';
import AddFavoriteButton from './AddFavoriteButton';

describe('Given the deleteFavoriteButton component', () => {
  render(<AddFavoriteButton _id="1" token="1" />);

  test('when render the star icon should appear', () => {
    const addFavoriteButton = screen.getByPlaceholderText('add-favorite-button');
    fireEvent.click(addFavoriteButton);
    expect(screen.getByPlaceholderText(/add-favorite-button/i)).toBeInTheDocument();
  });
});
