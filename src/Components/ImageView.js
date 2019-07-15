import React from 'react';
import {connect} from 'react-redux';
import {fetchArt} from '../actions';
import {Link} from 'react-router-dom';

class ImageView extends React.Component{
  componentDidMount(){
    this.imageId = this.props.match.params.imageId;
    this.props.fetchArt(this.imageId)
  }
  renderbutton(){
    if (this.props.auth.userId == this.props.image[this.imageId].userId){
      return (
        <div>
          <Link to = {`/edit/` + this.imageId}>
            <button className="ui button">Edit</button>
          </Link>
        </div>
    )}
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
          <div>
            <p>{this.props.image[this.imageId].description}</p>
          </div>
          {this.renderbutton()}
        </div>)
    }
  else{
    return <p>loading</p>
  }

  }
}
const mapStateToProps = (state) =>{
  return {image:state.images, auth:state.auth}
}

export default connect(mapStateToProps, {fetchArt})(ImageView);
