import {createStore, combineReducers} from 'redux';
import aroms from './reducers/aroms';
import calculator from './reducers/calculator';


const rootReducer = combineReducers({
  aroms,
  calculator
});


export default createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);