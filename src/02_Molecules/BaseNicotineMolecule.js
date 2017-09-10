import React, { Component } from 'react';
import SliderNicotineBase from '../01_Atoms/SliderNicotineBase';

class BaseNicotineMolecule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Никотин</h3>
        <SliderNicotineBase />
      </div>
    );
  }
}

export default BaseNicotineMolecule;