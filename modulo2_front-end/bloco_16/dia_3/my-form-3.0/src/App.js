import React from 'react';
import Form from './Form'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store= { store }>
      <div>
        <header>
          <Form />
        </header>
      </div>
    </Provider>
  );
}

export default App;