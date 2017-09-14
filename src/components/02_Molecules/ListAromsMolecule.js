import React, {Component} from 'react';
import {Modal, Button, AutoComplete, Row, Col} from 'antd';
import '../02_Molecules/ListAromsMolecule.css';



class ListAromsMolecule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aroms: this.props.aromsList,
    }
  }
  filter(e){
    this.setState({
      filter: e.target.value
    })
  }
  render() {
    const aroms = this.props.aromsList.map((item) => <div className={'ant-select-dropdown-menu-item'} key={item} onClick={this.props.selectArom}>{item}</div>);
    if (this.state.filter) {
      aroms.filter(item =>
        item.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }
    return (
      <div>
      <input type="text" onChange={this.filter.bind(this)}/>
      {aroms}
      </div>
    )
  }
}
export default ListAromsMolecule;