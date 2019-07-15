import React from 'react';
import ImageForm from './ImageForm';
import {connect} from 'react-redux';
import {fetchArt} from '../actions';

class ImageEdit extends React.Component{
  componentDidMount(){
    this.imageId = this.props.match.params.imageId;
    this.props.fetchArt(this.imageId);
  }
  render(){
    return(<div className="ui form">
        <ImageForm onSubmit={() => console.log("submit")}/>
      </div>)
  }
}
const mapStateToProps = (state) =>{
  return{
    images:state.images
  }
}

export default connect(mapStateToProps, {fetchArt})(ImageEdit);
