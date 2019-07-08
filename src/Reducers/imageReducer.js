import _ from 'lodash';
import {FETCH_IMAGES, FETCH_ART} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type){
    case FETCH_IMAGES:
      return ({...state, ..._.mapKeys(action.payload, 'id')});
    case FETCH_ART:
      return ({...state, [action.payload.id]:action.payload});
    default:
      return state;
  }
}
