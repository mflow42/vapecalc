import React, { Component } from 'react';
import SliderNicotineDesired from '../01_Atoms/SliderNicotineDesired';

class DesiredNicotineMolecule extends Component {
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
        <h3>Никотин</h3>
        <SliderNicotineDesired defaultValue={this.state.nicotine} onChange={value => this.setState({ nicotine: value })} />
      </div>
    );
  }
}

export default DesiredNicotineMolecule;