import React from 'react';
import {Router, Route} from 'react-router-dom';
import ImageCreate from './Components/ImageCreate';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/create" exact component={ImageCreate} />
        </div>
      </Router>
    </div>
  );
}

export default App;
