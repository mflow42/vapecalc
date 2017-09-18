import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../src/components/05_Page/Page';
import 'antd/dist/antd.css';
import './index.css';
import store from './reducers/store';

const render = () => {
  const state = store.getState();
  ReactDOM.render(<Page {...state}/>, document.getElementById('root'));
}
render();

store.subscribe(render);