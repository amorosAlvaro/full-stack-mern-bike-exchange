import { render, screen, fireEvent } from '../../../utils/test.utils';
import DeleteFavoriteButton from './DeleteFavoriteButton';

describe('Given the deleteFavoriteButton component', () => {
  render(<DeleteFavoriteButton _id="1" token="1" />);

  test('when render the star icon should appear', () => {
    const deleteFavoriteButton = screen.getByPlaceholderText('delete-favorite-button');
    fireEvent.click(deleteFavoriteButton);
    expect(screen.getByPlaceholderText(/delete-favorite-button/i)).toBeInTheDocument();
  });
});
