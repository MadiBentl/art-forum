import React from 'react';
import {connect} from 'react-redux';
import {fetchArt} from '../actions';

class ImageView extends React.Component{
  componentDidMount(){
    this.imageId = this.props.match.params.imageId;
    this.props.fetchArt(this.imageId)
  }
  render(){
    console.log(this.props);
    if (this.props.image[this.imageId]){
      return(
        <div>
          <h1>{this.props.image[this.imageId].title}</h1>
          <div className="ui large image">
            <img src={this.props.image[this.imageId].imageUrl} />
          </div>
          <p>{this.props.image[this.imageId].description}</p>
        </div>)
    }
  else{
    return <p>loading</p>
  }

  }
}
const mapStateToProps = (state) =>{
  return {image:state.images}
}

export default connect(mapStateToProps, {fetchArt})(ImageView);
