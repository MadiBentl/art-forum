import artwork from '../apis/artwork'
/*
Action Types:
Fetch Image
Fetch Images
Add Image
Edit Image
Delete Image
Fetch Comments
Add Comment
Edit Comment
Delete Comment

*/

export const signIn =(userId)=>{
  return({
    type: 'SIGN IN',
    payload: userId
  })
}

export const signOut =()=>{
  return({
    type: 'SIGN OUT'
  })
}
export const createArt = formValues => async dispatch => {
    artwork.post('./artworks', formValues);
};
