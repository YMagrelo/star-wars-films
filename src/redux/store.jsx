import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { reducer } from './reducer';

const reducers = combineReducers({
  reducer,
  form: formReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
