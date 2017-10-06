import React, { Component } from 'react';
import ListAromsMoleculeTpa from './ListAromsMoleculeTpa';
import ListAromsMoleculeCapella from './ListAromsMoleculeCapella';
import ListAromsMoleculeFlavourArt from './ListAromsMoleculeFlavourArt';
import { Modal, Button, Tabs } from 'antd';
import '../02_Molecules/AromsModalMolecule.css';

const TabPane = Tabs.TabPane;

function callback(key) {
}


class AromsModalMolecule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }
  setModalVisible(modalVisible) {
    this.setState({
      modalVisible
    });
  }

  render() {
    return (
      <div>

        <Button
          type="dashed"
          size="large"
          icon="plus"
          onClick={() => this.setModalVisible(true)}>Добавить ароматизаторы
        </Button>

        <Modal
          //cancelText="Отмена"
          //okText="Далее"
          title="Ароматизаторы"
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          onOk={() => { this.setModalVisible(false); }}
          onCancel={() => this.setModalVisible(false)}
          footer={null}
          //footer={[
          //  <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
          //  <Button key="submit" type="primary" size="large" onClick={this.handleOk}>
          //    Submit
          //  </Button>,
          //]}
        >
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="TPA" key="1"><ListAromsMoleculeTpa /></TabPane>
            <TabPane tab="Capella" key="2"><ListAromsMoleculeCapella /></TabPane>
            <TabPane tab="FlavourArt" key="3"><ListAromsMoleculeFlavourArt /></TabPane>
          </Tabs>

        </Modal >
      </div>
    );
  }
}

export default AromsModalMolecule;
