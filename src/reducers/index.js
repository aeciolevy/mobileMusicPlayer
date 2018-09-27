import { combineReducers } from 'redux';
import { reducer as flashReducer } from 'redux-flash';

export default combineReducers({
    flash: flashReducer,
});
