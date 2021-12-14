/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
// import { Provider } from 'react-redux';
// import { Router, BrowserRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import { render, screen } from '../../utils/test.utils';
// import configureStore from '../../redux/store/index';
import Details from './Details';
import { loadBikeById } from '../../redux/action.creators';
import actionTypes from '../../redux/action.types';
// import { render } from '../../utilsNoRouter/test.utils.noRouter';

// jest.mock('../../redux/action.creators');

jest.mock('../../redux/action.creators', () => ({
  ...jest.requireActual('../../redux/action.creators'),
  loadBikeById: jest.fn()
}));

// describe('Given the component Details', () => {
//   describe('when component is instantiated', () => {
//     test('then it should be rendered', () => {
//       const history = createMemoryHistory();
//       history.push('/details/222');
//       console.log('HISTORY:', history);
//       // location={history.location} navigator={history}

//       render(
//         <Provider store={configureStore({
//           bikes: [{
//             id: '222',
//             make: 'Honda',
//             owner: { name: 'Alvaro', surname: 'Alvaro' }
//           }, {
//             id: '1111',
//             make: 'Pedro',
//             owner: { name: 'B', surname: 'C' }
//           }]
//         })}
//         >
//           <Router>
//             <Details />
//           </Router>
//         </Provider>
//       );
//     });
//   });
// });

describe('Testing Details rendering', () => {
  const bikes = [
    {
      make: 'honda',
      owner: { name: 'pepe' }
    }
  ];
  loadBikeById.mockReturnValueOnce({ type: actionTypes.LOAD_BIKES, bikes });
  render(<Details />, { bikes });

  test('Should be rendered', () => {
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
  });
});
