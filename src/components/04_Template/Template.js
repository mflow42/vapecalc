import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import { createReactRouterMenu } from 'react-router-menu';
import { Layout, Menu, Row, Col } from 'antd';
import Main from '../03_Organisms/Main';
import Aboutus from '../03_Organisms/Aboutus';
import './Template.css';

const { Header, Content, Footer } = Layout;


// const routes = {
//   title: 'App',
//   path: '/',
//   component: App,
//   childRoutes: [
//     { title: 'Home', path: '/home', component: () => <div>Home</div> },
//     { title: 'About', path: '/about', component: () => <div>About</div> },
//     {
//       title: 'Help', path: 'help', component: ({ children }) => <div>Help: {children}</div> ,childRoutes: [
//         { title: 'FAQ', path: '/faq', component: () => <div>FAQ</div> },
//         { title: 'Contact', path: '/contact', component: () => <div>Contact</div> }
//       ]
//     }
//   ]
// }
 
// Create a ReactRouterMenu
// function App ({ children }) {
//   const ReactRouterMenu = createReactRouterMenu(routes)
//   return (
//     <div>
//       <ReactRouterMenu mode='horizontal' />
//       <div>
//         {children}
//       </div>
//     </div>
//   )
// }
 
// Render the router
// render((
//   <Router history={hashHistory} routes={routes}>
//   </Router>
// ), mountNode)



class Template extends Component {
  render() {
    return (
      <Router>
        <div>
          <Row type="flex" align="center">
            <Col xs={23} sm={20} md={16} lg={14} xl={12} >
              <Layout className="layout">
                <Header>
                  <div className="logo" />
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/main']}
                    style={{ lineHeight: '63px', width: '100%' }}
                  >
                    <Menu.Item key="/main">Главная</Menu.Item>
                    <Menu.Item key="/about">О нас</Menu.Item>
                    <Menu.Item key="/auth">Войти</Menu.Item>
                  </Menu>
                </Header>
                <Content style={{ boxSizing: 'border-box', padding: '0 10px' }}>
                  <div style={{ margin: '24px 0' }}></div>
                    {/* <Route path='/main' component={Main} />
                    <Route path='/aboutus' component={Aboutus} /> */}
                    <Main />
                </Content>
                <Footer style={{
                  textAlign: 'center'
                }}>
                  Flaw Flow Design ©2017 Created by user42 & L4zySh4rk
              </Footer>
              </Layout>
            </Col>
          </Row>
        </div>
      </Router>
    );
  };
}

export default Template;
