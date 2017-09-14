import React, {Component} from 'react';
import {Modal, Button, AutoComplete, Row, Col} from 'antd';
import '../02_Molecules/ListAromsMolecule.css';



class ListAromsMolecule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    }
  }
  render() {
    const aroms = this.props.aromsList.map((item) => <li className={'ant-select-dropdown-menu-item'} key={item} onClick={this.props.selectArom}>{item}</li>);
    return (
      <ul>{aroms}</ul>
    )
  }
}

export default ListAromsMolecule;