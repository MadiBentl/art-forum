import {SIGN_IN, SIGN_OUT} from "../actions/types";
export default(state={signedIn:null, userId:null}, action) =>{
  if (action.type == SIGN_IN){
    return {...state, signedIn:true, userId:action.payload}
  }
  else if (action.type == SIGN_OUT){
    return {...state, signedIn:false, userId:null}
  }
  else{
    return state;
  }
}
