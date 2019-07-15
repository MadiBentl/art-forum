import React from 'react';
import ImageForm from './ImageForm';

class ImageEdit extends React.Component{
  render(){
    return(<div>
        <ImageForm onSubmit={() => console.log("submit")}/>
      </div>)
  }
}

export default ImageEdit;
