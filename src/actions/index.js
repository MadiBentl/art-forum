/*
Action Types:
Sign in
Sign Out
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
export const signIn (userId){
  return({
    type: 'SIGN IN',
    payload: userId
  })
}

export const signOut(){
  return({
    type: 'SIGN OUT'
  })
}
