import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Modal, Layout, Menu, Row, Col } from 'antd';
import Main from '../03_Organisms/Main';
import About from '../03_Organisms/About';
import Auth from '../03_Organisms/Auth';

import './Template.css';

const { Header, Content, Footer } = Layout;
class Template extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <Router>
        <div className="bkgrndimg">
          <Row type="flex" align="center">
            <Col xs={23} sm={20} md={16} lg={14} xl={12} >
              <Layout className="layout">
                <Header>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['main']}
                    style={{ width: '100%' }}
                  >
                    <Link to="/calc/online"><div className="logo" /></Link>
                    <div style={{float: "right"}}>
                      <button onClick={this.showModal} className={"menu-link"}>Войти</button>
                      <Modal
                        title="Авторизация"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={null}
                        style={{maxWidth: 300}}
                      >
                        <Auth />
                      </Modal>
                    </div>
                  </Menu>
                </Header>
                <Content style={{ boxSizing: 'border-box', padding: '0 10px' }}>
                  <div style={{ margin: '24px 0' }}></div>
                  <Route exact path="/calc/online" component={Main} />
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
  }
}

export default Template;
