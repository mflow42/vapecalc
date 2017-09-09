
import React, { Component } from 'react';
import SliderNicotineOutput from '../01_Atoms/SliderNicotineOutput';
import SliderPgVgDesired from '../01_Atoms/SliderPgVgDesired';
import DesiredNicotineMolecule from '../02_Molecules/DesiredNicotineMolecule';

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
      </div>
    );
  }
}

export default DesiredOrganism;