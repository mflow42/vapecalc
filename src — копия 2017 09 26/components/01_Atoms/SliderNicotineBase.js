import React, { Component } from 'react';
import { Slider } from 'antd';
import { connect } from 'react-redux';
import { baseNicotineSliderChangeValue } from '../../actions/calculator';

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
          value={this.props.baseNicotineStrength}
          onChange={(value) => this.props.baseNicotineSliderChangeValue(value)}
        />
      </div>
    );
  }
}

export default connect(state => ({ baseNicotineStrength: state.calculator.baseNicotineStrength}), { baseNicotineSliderChangeValue })(SliderNicotineBase);
