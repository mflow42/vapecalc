import {createStore, combineReducers} from 'redux';
import calculator from './reducers/calculator';
import components from './reducers/components';


const rootReducer = combineReducers({
  calculator,
  components
});


export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
