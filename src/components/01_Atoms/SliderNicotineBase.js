import React, { Component } from 'react';
import { Slider } from 'antd';
import { connect } from 'react-redux';
import { nicotineBaseSliderChangeValue } from '../../actions/calculator';

const marks = {
  0: '0',
  12: '12',
  24: '24',
  36: '36',
  100: '100 мг'
};

class SliderNicotineBase extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Slider
          marks={marks}
          value={this.props.baseNicotineStrength}
          onChange={(value) => this.props.nicotineBaseSliderChangeValue(value)}
        />
      </div>
    );
  }
}

export default connect(state => ({ calculator: state.baseNicotineStrength}), { nicotineBaseSliderChangeValue })(SliderNicotineBase);
