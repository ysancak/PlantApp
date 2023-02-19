import React from 'react';
import { Provider } from 'react-redux';
import store from '@app/store';

import StackNavigation from '@app/navigation/stack';

function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}

export default App;
