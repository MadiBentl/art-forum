import React from 'react';
import ImageForm from './ImageForm';

class ImageCreate extends React.Component{
  render(){
    return(
      <div className="ui container">
        <h1>Add your art!</h1>
        <div className="ui form">
          <ImageForm />
        </div>
      </div>)
  }
}

export default ImageCreate;
