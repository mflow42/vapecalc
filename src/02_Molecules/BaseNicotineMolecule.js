import React, { Component } from 'react';
import SliderNicotineInput from '../01_Atoms/SliderNicotineInput';

class BaseNicotineMolecule extends Component {
  state = {
    inputValue: 100,
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
        <SliderNicotineInput />
      </div>
    );
  }
}

export default BaseNicotineMolecule;