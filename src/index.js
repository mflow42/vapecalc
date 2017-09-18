import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import Page from '../src/components/05_Page/Page';
import store from './store';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
  <Page/>
</Provider>, document.getElementById('root'));