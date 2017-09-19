import React, {Component} from 'react';
import {Slider} from 'antd';

const marks = {
  0: '0',
  12: '12',
  24: '24',
  36: '36',
  100: '100 мг'
};

class SliderNicotineBase extends Component {
  render() {
    return (
      <div>
        <Slider
          marks={marks}
          value={this.inputValue}
          onChange={this.onChange}
          onAfterChange={this.handleChangeNicotineBase}
        />
      </div>
    );
  }
}

export default SliderNicotineBase;
