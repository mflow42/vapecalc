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

class SliderNicotineOutput extends Component {
  constructor(props) {
    super(props)
    this.handleNikotineChange = this.handleNikotineChange.bind(this)
  }

  handleNikotineChange(value) {
    this.props.onChange(value * 10)
  }

  render() {
    return (
      <div>
        <label>{this.props.lable}</label>
        <Slider marks={marks} max={12} step={0.5} defaultValue={3} onChange={this.props.handleNikotineChange} />
      </div>
    );
  }
}

export default SliderNicotineOutput;