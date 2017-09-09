import React, { Component } from 'react';
import SliderNicotineInput from '../01_Atoms/SliderNicotineInput';
import SliderPgVgInput from '../01_Atoms/SliderPgVgInput';
import BaseNicotineMolecule from '../02_Molecules/BaseNicotineMolecule';

class BaseOrganism extends Component {
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
        <h2>Основа</h2>
        <div style={{ height: '16px' }}></div>
        <BaseNicotineMolecule />
        <SliderPgVgInput />
      </div>
    );
  }
}

export default BaseOrganism;