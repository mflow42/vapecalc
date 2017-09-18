import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import MenuOrganism from '../03_Organisms/MenuOrganism';
import BaseOrganism from '../03_Organisms/BaseOrganism';
import AromsOrganism from '../03_Organisms/AromsOrganism';
import DesiredOrganism from '../03_Organisms/DesiredOrganism';
import MixResultOrganism from '../03_Organisms/MixResultOrganism';

const {Header, Content, Footer} = Layout;


class Template extends Component {
  constructor(props) {
    super(props);
    this.handleChangeNicotineBase = this
      .handleChangeNicotineBase
      .bind(this)
    this.handleChangeBasePgPercent = this
      .handleChangeBasePgPercent
      .bind(this)
    this.handleChangeAromsPercent = this
      .handleChangeAromsPercent
      .bind(this)
    this.handleChangeNicotineDesired = this
      .handleChangeNicotineDesired
      .bind(this)
    this.handleChangeDesiredPgPercent = this
      .handleChangeDesiredPgPercent
      .bind(this)
    this.handleChangeDesiredVolume = this
      .handleChangeDesiredVolume
      .bind(this)
  }

  handlingNegativeNumbers() {
    for (let key in this.state) {
      if (this.state[key] < 0) return;
      }
    }

    handleChangeNicotineBase(value) {
      this.setState({baseNicotineStrength: value})
    }
    handleChangeBasePgPercent(value) {
      this.setState({
        basePgPercent: value,
        baseVgPercent: 100 - value
      })
    }
    handleChangeAromsPercent(value) {
      this.setState({aromsPercent: value})
    }
    handleChangeNicotineDesired(value) {
      this.setState({desiredNicotineStrength: value})
    }
    handleChangeDesiredPgPercent(value) {
      this.setState({
        desiredPgPercent: value,
        desiredVgPercent: 100 - value
      })
    }
    handleChangeDesiredVolume(value) {
      this.setState({desiredVolume: value})
    }


  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo"/>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{lineHeight: '64px',width: '100%'}}
            >
              <Menu.Item key="1">О нас</Menu.Item>
              <Menu.Item key="2">Войти</Menu.Item>
            </Menu>
          </Header>
          <Content style={{boxSizing: 'border-box',padding: '0 10px'}}>
            <MenuOrganism/>
            <div style={{background: '#fff',padding: 24,minHeight: 280}}>
              <BaseOrganism />
              <div style={{height: '24px'}}></div>
              <AromsOrganism />
              <div style={{height: '24px'}}></div>
              <DesiredOrganism />
              <div style={{height: '24px'}}></div>
              <MixResultOrganism data={this.state}/>
            </div>
          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>
            Flaw Flow Design ©2017 Created by user42
          </Footer>
        </Layout>
      </div>
    );
  };
}

export default Template;
