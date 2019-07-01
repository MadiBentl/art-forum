import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createArt} from '../actions';

class ImageForm extends React.Component{
  onSubmit = formValues =>{
    console.log(formValues);
    this.props.createArt(formValues);
  }
  render(){
  return(
    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
      <div className="field required">
        <label htmlFor="imageUrl">Image URL</label>
        <Field name="imageUrl" component="input" type="text" required/>
        <Field name="imageUrl" component={renderError} />
      </div>
      <div className="field required">
        <label htmlFor="imageTitle">Title</label>
        <Field name="title" component="input" type="text" required/>
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <Field name="description" component="textarea" type="text" />
      </div>
      <div className="field">
        <label htmlFor="tags">Tags</label>
        <Field name="tags" component="input" type="text" />
      </div>
      <button className="ui secondary button" type="submit">Submit</button>
    </form>
  )}
}
const validate = formValues =>{
  const errors = {};
  if (!/^[A-Z0-9._%+-]+.(jpeg|jpg|gif|png)$/i.test(formValues.imageUrl)){
    errors.imageUrl = 'Please enter a valid image format';
  }
  return errors;
}
const renderError = ({meta: {touched, error}}) => {
  return touched && error ? <span>{error}</span> : false
}
const formWrapped = reduxForm({
  form: 'imageUpload', validate
})(ImageForm);

export default connect(null, {createArt})(formWrapped);
