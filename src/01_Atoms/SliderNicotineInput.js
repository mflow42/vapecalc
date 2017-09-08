import React, { Component } from 'react';
import { Slider } from 'antd';

const marks = {
  12: '12',
  24: '24',
  36: '36',
  100: {
    style: {
      color: 'grey-9',
    },
    label: <strong>100 мг/мл</strong>,
  },
};

class SliderNicotineInput extends Component {
  render() {
    return (
      <div>
        <Slider marks={marks} defaultValue={100} />
      </div>
    );
  }
}

export default SliderNicotineInput;