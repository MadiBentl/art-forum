import React from 'react';
import {connect} from 'react-redux';
import {fetchImages} from '../actions';

class ImageGallery extends React.Component{
  componentDidMount(){
    this.props.fetchImages();
  }
  renderImages(){
    return this.props.images.map(image =>{
      return(
        <div key={image.id} className="four wide column">
          <div className="ui medium image">
            <img src={image.imageUrl}/>
          </div>
        </div>)
    });
  }
  render(){
    return(<div>
      <div>Image Gallery</div>
      <div className="ui grid">
        {this.renderImages()}
      </div>
    </div>);
  }
}

const mapStateToProps=(state)=>{
  return{
    images: Object.values(state.images)
  }
}

export default connect(mapStateToProps, {fetchImages})(ImageGallery);
