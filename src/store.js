import {createStore, combineReducers} from 'redux';
import aroms from './reducers/aroms';
import calculator from './reducers/calculator';


const rootReducer = combineReducers({
  aroms,
  calculator
});


export default createStore(rootReducer);