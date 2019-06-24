import React from 'react';
import {Field, reduxForm} from 'redux-form';

let ImageForm = props =>{
  const {handleSubmit} = props;
  return(
    <form onSubmit={handleSubmit}>
      <div className="field required">
        <label htmlFor="imageUrl">Image URL</label>
        <Field name="imageUrl" component="input" type="text" />
      </div>
      <div className="field required">
        <label htmlFor="imageTitle">Title</label>
        <Field name="title" component="input" type="text" />
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
  )
}

ImageForm = reduxForm({
  form: 'imageUpload'
})(ImageForm);

export default ImageForm;
