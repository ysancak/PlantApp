import React from 'react';
import { Provider } from 'react-redux';

import store, { persistor } from '@app/store';
import { PersistGate } from 'redux-persist/integration/react';

import StackNavigation from '@app/navigation/stack';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
