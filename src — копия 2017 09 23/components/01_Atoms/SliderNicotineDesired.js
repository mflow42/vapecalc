import React, { Component } from 'react';
import { Slider } from 'antd';
import { connect } from 'react-redux';
import { desiredNicotineSliderChangeValue } from '../../actions/calculator'


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
  render() {
    return (
      <div>
        <Slider
          marks={marks}
          max={12}
          step={0.1}
          value={this.props.desiredNicotineStrength}
          onChange={(value) => this.props.desiredNicotineSliderChangeValue(value)}
        />
      </div>
    );
  }
}

export default connect(state => ({ desiredNicotineStrength: state.calculator.desiredNicotineStrength }), {desiredNicotineSliderChangeValue} )(SliderNicotineDesired);
