import React from 'react';
import {connect} from 'react-redux';
import {fetchImages} from '../actions';
import {Link} from 'react-router-dom';

class ImageGallery extends React.Component{
  componentDidMount(){
    this.props.fetchImages();
  }
  renderImages(){
    return this.props.images.map(image =>{
      if (/\.(jpeg|jpg|gif|png)$/i.test(image.imageUrl)){
        return(
          <div key={image.id} className="four wide column">
            <Link to={`/view/`+ image.id}>
              <div className="ui medium image">
                <img src={image.imageUrl}/>
              </div>
            </Link>
          </div>)
        }});
  }
  render(){
    this.props.images.reverse();
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
