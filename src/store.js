import {createStore, combineReducers} from 'redux';
import aroms from './reducers/aroms';
import calculator from './reducers/calculator';
// import components from './reducers/components';


const rootReducer = combineReducers({
  aroms,
  calculator,
  // components
});


export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
