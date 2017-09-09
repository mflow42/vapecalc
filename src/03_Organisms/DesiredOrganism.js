
import React, { Component } from 'react';
import SliderNicotineOutput from '../01_Atoms/SliderNicotineOutput';
import SliderPgVgDesired from '../01_Atoms/SliderPgVgDesired';

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
        <h3>Никотин</h3>
        <SliderNicotineOutput onChange={value => this.setState({ nicotine: value })} />
        <SliderPgVgDesired />
        <div style={{ height: '24px' }}></div>
      </div>
    );
  }
}

export default DesiredOrganism;