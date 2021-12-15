import { render } from '../../../utils/test.utils';
import FavoriteButton from './FavoriteButton';

describe('Given the favorite button component', () => {
  test('when render the star icon should appear', () => {
    const favorites = [{
      _id: '11'
    }];

    render(<FavoriteButton />, favorites);
  });
});
