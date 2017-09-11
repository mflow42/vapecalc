import React, {Component} from 'react';
import {Slider} from 'antd';

const marks = {
  0: '0%',
  10: '10%',
  20: '20%',
  30: '30%'
};

class SliderAroms extends Component {

  render() {
    return (
      <div>
        <Slider
          marks={marks}
          max={30}
          defaultValue={10}
          value={this.props.aromsPercent}
          onChange={this.props.handleChangeAromsPercent}/>
      </div>
    );
  }
}

export default SliderAroms;