import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aromsListTpa, aromsListCapella, aromsListFlavourArt } from '../01_Atoms/aromsList'
import { aromAdd, aromRemove } from '../../actions/aromsInCalc';
import { aromToggleSelection } from '../../actions/aromsList';
import { Modal, Button, Tabs } from 'antd';
import '../02_Molecules/AromsModalMolecule.css';

const TabPane = Tabs.TabPane;

function callback(key) {
  //   let tmp = [];
  //   tmp.aromsListTpa = aromsListTpa;
  //   tmp.aromsListCapella = aromsListCapella;
  //   tmp.aromsListFlavourArt = aromsListFlavourArt;
  //  console.log(tmp.aromsListFlavourArt);
}

class ListAromsMoleculeTpaView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.filter = this.filter.bind(this);
  }

  filter(e) {
    this.setState({
      filter: e.target.value,
    })
  }

  render() {
    let aroms = aromsListTpa;

    if (this.state.filter) {
      aroms = aroms.filter((arom, index) => arom.name.toLowerCase().includes(this.state.filter.toLowerCase()))
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
        {aroms.map((arom, index) => {
          return (
            <button
              key={arom.id}
              className={arom.selected ? 'arom-selected' : 'arom'}
              selected={arom.selected}
              onClick={
                () => {
                  if (arom.selected) {
                    this.props.aromRemove(arom.id, arom.name, index);
                    this.props.aromToggleSelection(arom.id, index);
                  } else {
                    this.props.aromAdd(arom.id, arom.name, index);
                    this.props.aromToggleSelection(arom.id, index);
                  }
                }
              }
            >{arom.name}
            </button>
          )
        })}
      </div>
    )
  }
}

const ListAromsMoleculeTpa = connect(state => ({ aromsInCalc: state.aromsInCalc, aromsListTpa: state.aromsList.aromsListTpa }), { aromAdd, aromRemove, aromToggleSelection })(ListAromsMoleculeTpaView)

class ListAromsMoleculeCapellaView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.filter = this.filter.bind(this);
  }

  filter(e) {
    this.setState({
      filter: e.target.value,
    })
  }

  render() {
    let aroms = aromsListCapella;

    if (this.state.filter) {
      aroms = aroms.filter((arom, index) => arom.name.toLowerCase().includes(this.state.filter.toLowerCase()))
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
        {aroms.map((arom, index) =>
          <button
            key={arom.id}
            className={arom.selected ? 'arom-selected' : 'arom'}
            selected={arom.selected}
            onClick={
              () => {
                if (arom.selected) {
                  this.props.aromRemove(arom.id, arom.name, index);
                  this.props.aromToggleSelection(arom.id, index);
                } else {
                  this.props.aromAdd(arom.id, arom.name, index);
                  this.props.aromToggleSelection(arom.id, index);
                }
              }
            }
          >{arom.name}</button>
        )}
      </div>
    )
  }
}

const ListAromsMoleculeCapella = connect(state => ({ aromsInCalc: state.aromsInCalc, aromsListCapella: state.aromsList.aromsListCapella }), { aromAdd, aromRemove, aromToggleSelection })(ListAromsMoleculeCapellaView)

class ListAromsMoleculeFlavourArtView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.filter = this.filter.bind(this);
  }

  filter(e) {
    this.setState({
      filter: e.target.value,
    })
  }

  render() {
    let aroms = aromsListFlavourArt;
    
    if (this.state.filter) {
      aroms = aroms.filter((arom, index) => arom.name.toLowerCase().includes(this.state.filter.toLowerCase()))
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

        {aroms.map((arom, index) => {
          return (
            <button
              key={arom.id}
              className={arom.selected ? 'arom-selected' : 'arom'}
              selected={arom.selected}
              onClick={
                () => {
                  if (arom.selected) {
                    this.props.aromRemove(arom.id, arom.name, index);
                    this.props.aromToggleSelection(arom.id, index);
                  } else {
                    this.props.aromAdd(arom.id, arom.name, index);
                    this.props.aromToggleSelection(arom.id, index);
                  }
                }
              }
            >{arom.name}</button>
          );
        })}
      </div>
    )
  }
}

const ListAromsMoleculeFlavourArt = connect(state => ({ aromsInCalc: state.aromsInCalc, aromsListFlavourArt: state.aromsList.aromsListFlavourArt }), { aromAdd, aromRemove, aromToggleSelection })(ListAromsMoleculeFlavourArtView)

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
