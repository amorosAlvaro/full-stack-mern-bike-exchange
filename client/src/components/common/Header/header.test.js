import { render, screen } from '../../../utils/test.utils';
import Header from './Header';

describe('Given the component header', () => {
  describe('if you are not logged in', () => {
    test('then login button  should be rendered', () => {
      render(<Header />);
      expect(screen.getAllByRole('img')).toHaveLength(1);
    });
  });
});
