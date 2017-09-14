import React, { Component } from 'react';
import SliderAroms from '../01_Atoms/SliderAroms';
import AromsModalMolecule from '../02_Molecules/AromsModalMolecule';
import { Button } from 'antd';

class AromsOrganism extends Component {
  render() {
    return (
      <div>
        <h2>Ароматизаторы</h2>

        <div style={{ height: '16px' }}></div>

        <SliderAroms
          aromsPercent={this.props.aromsPercent}
          handleChangeAromsPercent={this.props.handleChangeAromsPercent}
        />

        <div style={{ height: '16px' }}></div>

        <AromsModalMolecule />
      </div>
    )
  };
};

export default AromsOrganism;