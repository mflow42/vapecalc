import React, { Component } from 'react';
import SliderPgVgDesired from '../01_Atoms/SliderPgVgDesired';
import DesiredNicotineMolecule from '../02_Molecules/DesiredNicotineMolecule';
import DesiredVolumeMolecule from '../02_Molecules/DesiredVolumeMolecule';

class DesiredOrganism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nicotine: 6,
    }
  }

  onChange = (value) => {
    this.state.onChange(value)
  }

  render() {
    return (
      <div>
        <h2>Ожидаемый результат</h2>
        <div style={{ height: '16px' }}></div>
        <DesiredNicotineMolecule defaultValue={this.state.nicotine} onChange={value => this.setState({ nicotine: this.value })}/>
        <SliderPgVgDesired />
        <DesiredVolumeMolecule />
      </div>
    );
  }
}

export default DesiredOrganism;