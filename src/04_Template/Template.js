import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Row, Col } from 'antd';
import SliderPercent from '../01_Atoms/SliderPercent';
import SliderNicotineOutput from '../01_Atoms/SliderNicotineOutput';
import MenuOrganism from '../03_Organisms/MenuOrganism';
import BaseOrganism from '../03_Organisms/BaseOrganism';
import AromsOrganism from '../03_Organisms/AromsOrganism';

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

            <div style={{ margin: '24px 0' }}></div>
            <MenuOrganism />

            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <BaseOrganism />
              <AromsOrganism />

              <h2>Ожидаемый результат</h2>
              <div style={{ height: '16px' }}></div>
              <h4>Никотин</h4>
              <SliderNicotineOutput onChange={value => this.setState({ nicotine: value })} />
              <h4>PG</h4>
              <SliderPercent defaultValue={30} />
              <h4>VG</h4>
              <SliderPercent defaultValue={70} />
              <div style={{ height: '24px' }}></div>


              <h2>Расчет</h2>
              <div style={{ height: '16px' }}></div>
              <Row type="flex" align="center">
                <Col span={6}>
                  <br />
                  <div style={{ height: '16px' }}></div>
                  <h4>Ароматизаторов</h4><br />
                  <h4>Основы</h4><br />
                  <h4>PG</h4><br />
                  <h4>VG</h4><br />
                  <hr />
                  <h4>Итого</h4><br />
                </Col>
                <Col span={6}>
                  <h4>Миллилитров</h4>
                  <div style={{ height: '16px' }}></div>
                  <h4>мл Аром</h4><br />
                  <h4>мл Основы</h4><br />
                  <h4>мл PG</h4><br />
                  <h4>мл VG</h4><br />
                  <hr />
                  <h4>Итого мл</h4><br />
                </Col>
                <Col span={6}>
                  <h4>Капель</h4>
                  <div style={{ height: '16px' }}></div>
                  <h4>капель Аром</h4><br />
                  <h4>капель Основы</h4><br />
                  <h4>капель PG</h4><br />
                  <h4>каплей VG</h4><br />
                  <hr />
                  <h4>Итого капель</h4><br />
                </Col>
                <Col span={6}>
                  <h4>Граммов</h4>
                  <div style={{ height: '16px' }}></div>
                  <h4>граммов Аром</h4><br />
                  <h4>граммов Основы</h4><br />
                  <h4>граммов PG</h4><br />
                  <h4>граммов VG {this.state.nicotine * 10}</h4><br />
                  <hr />
                  <h4>Итого капель</h4><br />
                </Col>
              </Row>
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