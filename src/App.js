import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';
import ImageCreate from './Components/ImageCreate';
import HomePage from './Components/HomePage';
import ImageDelete from './Components/ImageDelete';
import ImageEdit from './Components/ImageEdit';
import ImageGallery from './Components/ImageGallery';
import ImageView from './Components/ImageView';
import Header from './Components/Header';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/create" exact component={ImageCreate} />
          <Route path= "/delete" exact component={ImageDelete} />
          <Route path="/edit/:imageId" exact component={ImageEdit} />
          <Route path="/gallery" exact component={ImageGallery} />
          <Route path='/view/:imageId' exact component={ImageView} />
        </div>
      </Router>
    </div>
  );
}

export default App;
