import React from 'react';
import {connect} from 'react-redux';
import {fetchImages} from '../actions';

class ImageGallery extends React.Component{
  componentDidMount(){
    this.props.fetchImages();
  }
  render(){
    console.log(this.props.images);
    return(<div>Image Gallery</div>);
  }
}

const mapStateToProps=(state)=>{
  return{
    images: state.images
  }
}

export default connect(mapStateToProps, {fetchImages})(ImageGallery);
