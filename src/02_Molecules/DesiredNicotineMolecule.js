import React, { Component } from 'react';
import SliderNicotineOutput from '../01_Atoms/SliderNicotineOutput';

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
        <SliderNicotineOutput onChange={value => this.setState({ nicotine: value })} />
      </div>
    );
  }
}

export default DesiredNicotineMolecule;