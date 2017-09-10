import React, { Component } from 'react';
import { Slider } from 'antd';

const marks = {
  0: '0',
  12: '12',
  24: '24',
  36: '36',
  100: '100 мг/мл',
};

class SliderNicotineBase extends Component {
  constructor(props) {
    super(props);
    this.handleChangeNicotineBase = this.handleChangeNicotineBase.bind(this);
    this.state = {
      baseNicotineStrength: 100
    };
  }
  handleChangeNicotineBase(event) {
    let value = event.target.value;
    this.props.handleChangeNicotineBase(value);
    this.setState({
      baseNicotineStrength: event.target.value
    });
  }
  render() {
    return (
      <div>
        <Slider marks={marks} defaultValue={this.state.baseNicotineStrength} onChange={this.handleChangeNicotineBase} />
      </div>
    );
  }
}

export default SliderNicotineBase;