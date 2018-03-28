import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './store/configureStore';
import ProductsList from './containers/products_list';

const store = configureStore();
const App = () => (
  (
    <Provider store={store}>
        <ProductsList />
    </Provider>
  )
);

export default App;
