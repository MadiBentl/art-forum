import React from 'react';
import ImageForm from './ImageForm';
import {connect} from 'react-redux';
import {createArt} from '../actions';


class ImageCreate extends React.Component{
  submit = values => {
    console.log(values);
    this.props.createArt(values);
  }
  render(){
    return(
      <div className="ui container">
        <h1>Add your art!</h1>
        <div className="ui form">
          <ImageForm onSubmit={this.submit}/>
        </div>
      </div>)
  }
}

export default connect(null, {createArt})(ImageCreate);
