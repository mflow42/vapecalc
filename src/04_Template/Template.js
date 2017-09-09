import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Row, Col } from 'antd';
import MenuOrganism from '../03_Organisms/MenuOrganism';
import BaseOrganism from '../03_Organisms/BaseOrganism';
import AromsOrganism from '../03_Organisms/AromsOrganism';
import DesiredOrganism from '../03_Organisms/DesiredOrganism';
import MixResultOrganism from '../03_Organisms/MixResultOrganism';

const { Header, Content, Footer } = Layout;

class Template extends Component {
  state = {
    nicotine: 0,
  }

  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">О нас</Menu.Item>
              <Menu.Item key="2">Войти</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <MenuOrganism />
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <BaseOrganism />
              <AromsOrganism />
              <DesiredOrganism />
              <h2>Расчет</h2>
              <div style={{ height: '16px' }}></div>
              <MixResultOrganism />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Flaw Flow Design ©2017 Created by user42
        </Footer>
        </Layout>
      </div>
    );
  };
}

export default Template;