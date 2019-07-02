import _ from 'lodash';
import {FETCH_IMAGES} from '../actions';

export default (state = {}, action) => {
  switch (action.type){
    case 'FETCH_IMAGES':
      return ({...state, ..._.mapKeys(action.payload, 'id')});
    default:
      return state;
  }
}
