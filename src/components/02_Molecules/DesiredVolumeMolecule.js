import React, { Component } from 'react';
import { InputNumber } from 'antd';
import { connect } from 'react-redux';
import { desiredMixVolumeChangeValue } from '../../actions/calculator' ;

class DesiredNicotineMolecule extends Component {
  render() {
    return <h3>Желаемый объем,&nbsp;<InputNumber value={this.props.desiredMixVolume} onChange={(value) => this.props.desiredMixVolumeChangeValue(value)}/>&nbsp;мл</h3>;
  }
}

export default connect(state => ({desiredMixVolume: state.calculator.desiredMixVolume}), {desiredMixVolumeChangeValue})(DesiredNicotineMolecule);
