import React from 'react';
import {connect} from 'react-redux';
import {fetchImages} from '../actions';

class ImageGallery extends React.Component{
  render(){
    console.log(this.props.fetchImages());
    return(<div>Image Gallery</div>);
  }
}

export default connect(null, {fetchImages})(ImageGallery);
