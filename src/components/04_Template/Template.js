import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { createReactRouterMenu } from 'react-router-menu';
import { Layout, Menu, Row, Col } from 'antd';
import Main from '../03_Organisms/Main';
import Aboutus from '../03_Organisms/Aboutus';
import './Template.css';

const { Header, Content, Footer } = Layout;

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
                    {/* <Link to={`/main`} className={'menu-link'}>Главная</Link>
                    <Link to={`/about`} className={'menu-link'}>О нас</Link>
                    <Link to={`/auth`} className={'menu-link'}>Войти</Link> */}
                    <Menu.Item key="/main">Главная</Menu.Item>
                    <Menu.Item key="/about">О нас</Menu.Item>
                    <Menu.Item key="/auth">Войти</Menu.Item>
                  </Menu>
                </Header>
                <Content style={{ boxSizing: 'border-box', padding: '0 10px' }}>
                  <div style={{ margin: '24px 0' }}></div>
                    <Route path='/main' component={Main} />
                    <Route path='/aboutus' component={Aboutus} />
                </Content>
                <Footer style={{
                  textAlign: 'center'
                }}>
                  Flaw Flow Design ©2017 Created by user42
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
