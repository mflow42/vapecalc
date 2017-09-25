import React, { Component } from 'react';
import { connect } from 'react-redux';
import aromsList from '../01_Atoms/aromsList'
import { Modal, Button, } from 'antd';
import '../02_Molecules/AromsModalMolecule.css';
import { addAromToComponent } from '../../actions/component';
import { aromAddToCalculator } from '../../actions/calculator';

class ListAromsMoleculeView extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }
  componentWillMount = () => {
    this.setState({
      items: aromsList,
    })
  }
  filter(e) {
    this.setState({
      filter: e.target.value,
    })
  }

  render() {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter(item => item.toLowerCase().includes(this.state.filter.toLowerCase()))
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
        {aromsList.map(item =>
          <button className={'arom'} onClick={() => {
            this.props.addAromToComponent(item.name, item);
            this.props.aromAddToCalculator(item.name);
            }
          }>{item.name}</button>
        )}
      </div>
    )
  }
}

const ListAromsMolecule = connect(state => state, { addAromToComponent, aromAddToCalculator })(ListAromsMoleculeView)

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
          onClick={() => this.setModalVisible(true)}>Добавить ароматизаторы</Button>

        <Modal
          cancelText="Отмена"
          okText="Добавить"
          title="Ароматизаторы"
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          onOk={() => { this.setModalVisible(false); }}
          onCancel={() => this.setModalVisible(false)}
        >
          <ListAromsMolecule />
        </Modal >
      </div>
    );
  }
}

export default AromsModalMolecule;
