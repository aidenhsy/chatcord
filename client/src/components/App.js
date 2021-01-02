import React from 'react';

import Login from './Login';
import Dashboard from './Dashboard';

import useLocalStorage from '../hooks/useLocalStorage';

const App = () => {
  const [id, setId] = useLocalStorage('id');

  return (
    <React.Fragment>
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </React.Fragment>
  );
};

export default App;
