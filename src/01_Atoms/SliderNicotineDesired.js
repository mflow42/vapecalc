import React, { Component } from 'react';
import { Slider } from 'antd';

const marks = {
  0: '0',
  1: '1',
  '1.5': '1.5',
  3: '3',
  6: '6',
  9: '9',
  12: '12',
};

class SliderNicotineDesired extends Component {
  constructor(props) {
    super(props)
  }
  onChange = (value) => {
    this.props.onChange(value)
  }
  render() {
    return (
      <div>
        <label>{this.props.lable}</label>
        <Slider
          marks={marks}
          max={12}
          step={0.1}
          defaultValue={3}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SliderNicotineDesired;