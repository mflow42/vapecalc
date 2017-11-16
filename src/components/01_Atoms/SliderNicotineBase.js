import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { baseNicotineSliderChangeValue } from '../../actions/calculator';

const marks = {
  0: {
    style: {
      // width: 40,
      width: 'auto',
      marginLeft: '-0.5%',
      //right: '0',
      align: 'center'
    },
    label: '0'
  },
  12: '12',
  24: '24',
  36: '36',
  100: {
    style: {
      // width: 40,
      //marginLeft: '-3%',
      // margin: 'auto',
      justifyContent: 'flex-end',
      //right: '0',
      // align: 'right'
      width: 'auto',
      // textAlign: 'right',
      whiteSpace: 'nowrap',

    },
    label: '100 мг'
  }
};

class SliderNicotineBase extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <Col
            sm={{ span: 2, order: 1 }}
            xs={{ span: 2, order: 1 }}
          >
            <h3>Никотин</h3>
          </Col>

          <Col
            sm={{ span: 3, order: 2 }}
            xs={{ span: 6, order: 2 }}
          >
            <InputNumber
              min={0}
              max={100}
              style={{ width: '100%' }}
              value={this.props.baseNicotineStrength}
              onChange={(value) => this.props.baseNicotineSliderChangeValue(value)}
            />
          </Col>
          <Col
            sm={{ span: 18, order: 3 }}
            xs={{ span: 24, order: 3 }}
          >
            <Slider
              marks={marks}
              value={this.props.baseNicotineStrength}
              onChange={(value) => this.props.baseNicotineSliderChangeValue(value)}
            />
          </Col>
        </Row>
      </div >
    );
  }
}

export default connect(state => ({ baseNicotineStrength: state.calculator.baseNicotineStrength }), { baseNicotineSliderChangeValue })(SliderNicotineBase);
