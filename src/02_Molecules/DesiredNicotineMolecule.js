import React, { Component } from 'react';
import SliderNicotineDesired from '../01_Atoms/SliderNicotineDesired';

class DesiredNicotineMolecule extends Component {
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
        <h3>Никотин</h3>
        <SliderNicotineDesired onChange={value => this.setState({ nicotine: value })} />
      </div>
    );
  }
}

export default DesiredNicotineMolecule;