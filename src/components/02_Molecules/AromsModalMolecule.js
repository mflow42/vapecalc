import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aromsListTpa, aromsListCapella, aromsListFlavourArt } from '../01_Atoms/aromsList'
import { aromAdd } from '../../actions/aroms';
import { Modal, Button, Tabs } from 'antd';
import '../02_Molecules/AromsModalMolecule.css';

const TabPane = Tabs.TabPane;

function callback(key) {
  // console.log(key);
}

class ListAromsMoleculeTpaView extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  componentWillMount = () => {
    this.setState({
      aroms: aromsListTpa,
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
      aroms = aroms.filter(arom => arom.name.toLowerCase().includes(this.state.filter.toLowerCase()))
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
        {aroms.map(arom =>
          <button key={arom.name} className={'arom'} onClick={() => {
            this.props.aromAdd(arom.id, arom.name);
          }
          }>{arom.name}</button>
        )}
      </div>
    )
  }
}

const ListAromsMoleculeTpa = connect(state => ({aroms: state.aroms}), { aromAdd })(ListAromsMoleculeTpaView)

class ListAromsMoleculeCapellaView extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  componentWillMount = () => {
    this.setState({
      aroms: aromsListCapella,
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
      aroms = aroms.filter(arom => arom.name.toLowerCase().includes(this.state.filter.toLowerCase()))
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
        {aroms.map(arom =>
          <button key={arom.name} className={'arom'} onClick={() => {
            this.props.aromAdd(arom.id, arom.name);
          }
          }>{arom.name}</button>
        )}
      </div>
    )
  }
}

const ListAromsMoleculeCapella = connect( state => ({aroms: state.aroms}), { aromAdd })(ListAromsMoleculeCapellaView)

class ListAromsMoleculeFlavourArtView extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  componentWillMount = () => {
    this.setState({
      aroms: aromsListFlavourArt,
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
      aroms = aroms.filter( arom => arom.name.toLowerCase().includes(this.state.filter.toLowerCase()) )
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

        {aroms.map( (arom, index) => {
          //return this.props.aroms.map(aromInList => {
            //console.log(this.props.aroms);
            //console.log(arom.id);
            //if (this.props.aroms.indexOf(arom.id)) {
              return (
                <button
                  key={arom.name}
                  className={'arom'}
                  onClick={
                    () => {
                      this.props.aromAdd(arom.id, arom.name);
                    }
                  }>{arom.name}
                </button>
              );
            //} else {
            //  return (
            //    <button
              //    key={arom.name}
                //  className={'arom'}
              //    onClick={
             //       () => {
              //        this.props.aromAdd(arom.id, arom.name);
              //      }
               //   }>{arom.name}
              //  </button>
            //  );
           // }
        })}
      </div>
    )
  }
}

const ListAromsMoleculeFlavourArt = connect( state => ({aroms: state.aroms}), { aromAdd } )(ListAromsMoleculeFlavourArtView)

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
