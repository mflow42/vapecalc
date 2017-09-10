import React, { Component } from 'react';
import SliderPgVgBase from '../01_Atoms/SliderPgVgBase';
import BaseNicotineMolecule from '../02_Molecules/BaseNicotineMolecule';

class BaseOrganism extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Основа</h2>
        <div style={{ height: '16px' }}></div>
        <BaseNicotineMolecule />
        <SliderPgVgBase />
      </div>
    );
  }
}

export default BaseOrganism;