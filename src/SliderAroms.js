import React, {Component} from 'react';
import { Slider } from 'antd';

const marks = {
  30: {
    style: {
      color: 'grey-9',
    },
    label: <strong>30 %</strong>,
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