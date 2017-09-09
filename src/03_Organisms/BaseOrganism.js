
import React, { Component } from 'react';
import SliderNicotineInput from '../01_Atoms/SliderNicotineInput';
import SliderPgVgInput from '../01_Atoms/SliderPgVgInput';

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
        <h3>Никотин</h3>
        <SliderNicotineInput />
        <SliderPgVgInput />
        <div style={{ height: '24px' }}></div>
      </div>
    );
  }
}

export default BaseOrganism;



