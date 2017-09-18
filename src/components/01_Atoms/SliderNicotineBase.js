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

  state = {
    inputValue: this.props.baseNicotineStrength
  }

  onChange = (value) => {
    this.setState({inputValue: value});
  }

  render() {
    return (
      <div>
        <Slider
          marks={marks}
          value={this.state.inputValue}
          onChange={this.onChange}
          onAfterChange={this.props.handleChangeNicotineBase}
        />
      </div>
    );
  }
}

export default SliderNicotineBase;