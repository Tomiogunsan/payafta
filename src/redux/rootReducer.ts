
import { combineReducers } from 'redux';
import modalPopSlice from '../features/modalPopUp/modalPopSlice';

const rootReducer = combineReducers({
  modal: modalPopSlice,
});
export default rootReducer;
