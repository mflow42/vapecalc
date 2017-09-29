import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Layout, Menu, Row, Col } from 'antd';
import Main from '../03_Organisms/Main';
import About from '../03_Organisms/About';
import Auth from '../03_Organisms/Auth';
import Welcome from '../03_Organisms/Welcome';
import './Template.css';


const { Header, Content, Footer } = Layout;

const Template = () => (
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
                    <Menu.Item><Link to="/main">Главная</Link></Menu.Item>
                    <Menu.Item><Link to="/about">О нас</Link></Menu.Item>
                    <Menu.Item><Link to="/auth">Войти</Link></Menu.Item>
                  </Menu>
                </Header>
                <Content style={{ boxSizing: 'border-box', padding: '0 10px' }}>
                  <div style={{ margin: '24px 0' }}></div>
                  <Route exact path="/" component={Welcome} />
                  <Route path="/main" component={Main} />
                  <Route path="/about" component={About} />
                  <Route path="/auth" component={Auth} />
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
      </ Router>
    );

export default Template;
