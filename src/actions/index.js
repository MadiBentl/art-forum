import artwork from '../apis/artwork';
import history from '../history'
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_ART,
  FETCH_IMAGES,
  CREATE_ART,
  EDIT_ART
} from './types';
/*
Action Types:
Done: Fetch Images, Add Image
Fetch Image
Edit Image
Delete Image
Fetch Comments
Add Comment
Edit Comment
Delete Comment

*/

export const signIn =(userId)=>{
  return({
    type: SIGN_IN,
    payload: userId
  })
}

export const signOut =()=>{
  return({
    type: SIGN_OUT
  })
}
export const createArt = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await artwork.post('./artworks', {...formValues, userId});
    dispatch({type:CREATE_ART, payload:response.data});
    history.push('/gallery');
};
export const fetchArt = id => async dispatch =>{
  const response = await artwork.get(`./artworks/${id}`);
  dispatch({type:FETCH_ART, payload:response.data})
}
export const fetchImages = () => async dispatch =>{
  const response = await artwork.get('./artworks');
  dispatch({type:FETCH_IMAGES, payload: response.data});
}
export const editArt = (id, formValues) => async dispatch =>{
  const response = await artwork.patch(`./artworks/${id}`, {...formValues});
  dispatch({type:EDIT_ART, payload: response.data});
  history.push(`/gallery`);
}
