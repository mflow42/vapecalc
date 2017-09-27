import {createStore, combineReducers} from 'redux';
import aromsInCalc from './reducers/aromsInCalc';
import calculator from './reducers/calculator';
import aromsList from './reducers/aromsList';


const rootReducer = combineReducers({
  aromsInCalc,
  calculator,
  aromsList
});


export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
