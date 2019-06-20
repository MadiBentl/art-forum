export default(state={signedIn:null, userId:null}, action) =>{
  if (action.type == 'SIGN IN'){
    return {...state, signedIn:true, userId:action.payload}
  }
  else if (action.type == 'SIGN OUT'){
    return {...state, signedIn:false, userId:null}
  }
  else{
    return state;
  }
}
