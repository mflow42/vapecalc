import React, {Component} from 'react';
import {Slider} from 'antd';

const marks = {
  0: '0',
  1: '1',
  '1.5': '1.5',
  3: '3',
  6: '6',
  9: '9',
  12: '12 мг'
};

class SliderNicotineDesired extends Component {

  state = {
    inputValue: this.props.desiredNicotineStrength
  }

  onChange = (value) => {
    this.setState({inputValue: value});
  }

  render() {
    return (
      <div>
        <Slider
          marks={marks}
          max={12}
          step={0.1}
          value={this.state.inputValue}
          onChange={this.onChange}
          onAfterChange={this.props.handleChangeNicotineDesired}
          />
      </div>
    );
  }
}

export default SliderNicotineDesired;