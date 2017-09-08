import React, { Component } from 'react';
import { Slider } from 'antd';

const marks = {
  0: {
    style: {
      color: 'grey-9',
    },
    label: <strong>0%</strong>,
  },
  10: {
    style: {
      color: 'grey-9',
    },
    label: <strong>10%</strong>,
  },
  20: {
    style: {
      color: 'grey-9',
    },
    label: <strong>20%</strong>,
  },
  30: {
    style: {
      color: 'grey-9',
    },
    label: <strong>30%</strong>,
  },
  100: {
    style: {
      color: 'grey-9',
    },
    label: <strong>100%</strong>,
  },
};

class SliderAroms extends Component {

  render() {
    return (
      <div>
        <Slider marks={marks} defaultValue={10} />
      </div>
    );
  }
}

export default SliderAroms;