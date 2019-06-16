import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ImageCreate from './Components/ImageCreate';
import HomePage from './Components/HomePage';
import ImageDelete from './Components/ImageDelete';
import ImageEdit from './Components/ImageEdit';
import ImageGallery from './Components/ImageGallery';
import ImageView from './Components/ImageView';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/create" exact component={ImageCreate} />
          <Route path= "/delete" exact component={ImageDelete} />
          <Route path="/edit" exact component={ImageEdit} />
          <Route path="/gallery" exact component={ImageGallery} />
          <Route path='/view' exact component={ImageView} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
