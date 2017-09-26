import React, { Component } from 'react';
import { connect } from 'react-redux';
import aromsList from '../01_Atoms/aromsList'
import { Modal, Button, } from 'antd';
import '../02_Molecules/AromsModalMolecule.css';
import { aromAdd } from '../../actions/aroms';

class ListAromsMoleculeView extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }
  componentWillMount = () => {
    this.setState({
      aroms: aromsList,
    })
  }
  filter(e) {
    this.setState({
      filter: e.target.value,
    })
  }

  render() {
    let aroms = this.state.aroms;
    if (this.state.filter) {
      aroms = aroms.filter(arom => arom.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text"
          onChange={this.filter}
          className={'ant-input ant-select-search__field'}
          placeholder="Введите название ароматизатора"
          style={{ width: "100%" }}
        />
        <div style={{ height: '16px' }}></div>
        {aromsList.map(arom =>
          <button className={'arom'} onClick={() => {
            this.props.aromAdd(arom.id, arom.name);
            }
          }>{arom.name}</button>
        )}
      </div>
    )
  }
}

function success() {
  Modal.success({
    title: 'This is a success message',
    content: 'some messages...some messages...',
    maskClosable: true,
  });
}

const ListAromsMolecule = connect(state => state, { aromAdd })(ListAromsMoleculeView)

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
          cancelText="Отмена"
          okText="Далее"
          title="Ароматизаторы"
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          onOk={() => { this.setModalVisible(false); }}
          onCancel={() => this.setModalVisible(false)}
        ><ListAromsMolecule /></Modal >
      </div>
    );
  }
}

export default AromsModalMolecule;
