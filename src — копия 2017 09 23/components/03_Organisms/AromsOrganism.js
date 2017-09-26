import React, { Component } from 'react';
import AromsModalMolecule from '../02_Molecules/AromsModalMolecule';
import AromsSliderMolecule from '../02_Molecules/AromsSliderMolecule';

class AromsOrganism extends Component {
  render() {
    return (
      <div>
        <AromsSliderMolecule />
        <div style={{ height: '16px' }}></div>
        <AromsModalMolecule />
      </div>
    )
  };
};

export default AromsOrganism;
