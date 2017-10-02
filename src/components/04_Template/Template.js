import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Layout, Menu, Row, Col } from 'antd';
import Main from '../03_Organisms/Main';
import About from '../03_Organisms/About';
import Auth from '../03_Organisms/Auth';

import './Template.css';

const { Header, Content, Footer } = Layout;

const Template = () => (
  <Router>
    <div>
      <Row type="flex" align="center">
        <Col xs={23} sm={20} md={16} lg={14} xl={12} >
          <Layout className="layout">
            <Header>
              <Link to="/calc/online/main"><div className="logo" /></Link>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['main']}
                style={{ lineHeight: '64px', width: '100%' }}
              >
                <Link className={"menu-link"} to="/calc/online/main">Главная</Link>
                <Link className={"menu-link"} to="/calc/online/about">О нас</Link>
                <Link to="/calc/online/auth"><a href="http://perehodinapar.ru/calc/index.php?app=core&module=global&section=login" className={"menu-link"}>Войти</a></Link>
              </Menu>
            </Header>
            <Content style={{ boxSizing: 'border-box', padding: '0 10px' }}>
              <div style={{ margin: '24px 0' }}></div>
              <Route exact path="/calc/online/main" component={Main} />
              <Route path="/calc/online/about" component={About} />
              <Route path="/calc/online/auth" component={Auth} />
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
  </ Router>
);

export default Template;
