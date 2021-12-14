/* eslint-disable import/no-unresolved */
import { render, screen } from '../../utils/test.utils';
import AddBike from './AddBike';

describe('Given the component AllBikesList', () => {
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

describe('When there is no data in the local state', () => {

});
