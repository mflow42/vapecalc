import React, {Component} from 'react';
import {InputNumber} from 'antd';

class DesiredNicotineMolecule extends Component {
  render() {
    return <h3>Желаемый объем,&nbsp;<InputNumber
      value={this.props.desiredVolume}
      onChange={this.props.handleChangeDesiredVolume}/>&nbsp;мл</h3>;
  }
}

export default DesiredNicotineMolecule;