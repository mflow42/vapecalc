import React, {Component} from 'react';
import { Slider } from 'antd';

const marks = {
  20: '20',
  30: '30',
  50: '50',
  70: '70',
  80: '80',
  100: {
    style: {
      color: 'grey-9',
    },
    label: <strong>100 %</strong>,
  },
};

class SliderVG extends Component {

  render() {
    return (
      <div>
        <Slider marks={marks} defaultValue={70} />
      </div>
    );
  }
}
  
export default SliderVG;