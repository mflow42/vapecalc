import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Template from '../src/components/04_Template/Template';
import store from './store';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Template />
  </Provider>, document.getElementById('root'));
