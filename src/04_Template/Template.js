import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import MenuOrganism from '../03_Organisms/MenuOrganism';
import BaseOrganism from '../03_Organisms/BaseOrganism';
import AromsOrganism from '../03_Organisms/AromsOrganism';
import DesiredOrganism from '../03_Organisms/DesiredOrganism';
import MixResultOrganism from '../03_Organisms/MixResultOrganism';

const { Header, Content, Footer } = Layout;

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { Никотина: '' };
  }
}

class Template extends Component {
  constructor() {
    super();
    this.state = {
      baseNicotineStrength: 0,
      basePgPercent: 0,
      baseVgPercent: 0,
      aromsPercent: 0,
      desiredNicotineStrength: 0,
      desiredPgPercent: 0,
      desiredVgPercent: 0,
      desiredVolume: 0,
      data: [{}],
    }
  }

  handleChangeNicotineBase(event) {
    this.setState({ baseNicotineStrength: event.target.value })
  }
  // function Calculate(props) {
  //   return props.expectedVolume / ( props.nicotineBaseStrength * props.nicotineExpectedStrength)
  // }
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
              <BaseOrganism value={this.state.baseNicotineStrength} onChange={this.handleChangeBaseOrganism} />
              <div style={{ height: '24px' }}></div>
              <AromsOrganism />
              <div style={{ height: '24px' }}></div>
              <DesiredOrganism />
              <div style={{ height: '24px' }}></div>
              <MixResultOrganism data={this.data}
              />
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