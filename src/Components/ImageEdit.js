import React from 'react';
import ImageForm from './ImageForm';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchArt, editArt} from '../actions';

class ImageEdit extends React.Component{
  componentDidMount(){
    this.imageId = this.props.match.params.imageId;
    this.props.fetchArt(this.imageId);
  }
  onSubmit = formValues => {
    this.props.editArt(this.imageId, formValues);
  }
  render(){
    return(<div className="ui form">
        <ImageForm
          onSubmit={() => console.log("submit")}
          initialValues={_.pick(this.props.images[this.imageId], 'description', 'imageUrl', 'title', 'tags')}/>
      </div>)
  }
}
const mapStateToProps = (state) =>{
  return{
    images:state.images
  }
}

export default connect(mapStateToProps, {fetchArt, editArt})(ImageEdit);
