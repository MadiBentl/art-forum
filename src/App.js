import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ImageCreate from './Components/ImageCreate';
import HomePage from './Components/HomePage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/create" exact component={ImageCreate} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
