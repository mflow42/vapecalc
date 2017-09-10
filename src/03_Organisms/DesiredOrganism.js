import React, { Component } from 'react';
import SliderPgVgDesired from '../01_Atoms/SliderPgVgDesired';
import DesiredNicotineMolecule from '../02_Molecules/DesiredNicotineMolecule';
import DesiredVolumeMolecule from '../02_Molecules/DesiredVolumeMolecule';

class DesiredOrganism extends Component {
  state = {
    inputValue: 30,
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <div>
        <h2>Ожидаемый результат</h2>
        <div style={{ height: '16px' }}></div>
        <DesiredNicotineMolecule />
        <SliderPgVgDesired />
        <DesiredVolumeMolecule />
      </div>
    );
  }
}

export default DesiredOrganism;