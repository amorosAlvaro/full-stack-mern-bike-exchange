/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from '../redux/store';

function render(
  component,
  initialState
) {
  const store = configureStore(initialState);

  const Wrapper = function ({ children }) {
    return (
    //   <BrowserRouter>
      <Provider store={store}>
        {children}
      </Provider>
    //   </BrowserRouter>
    );
  };
  return rtlRender(component, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
