import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { desiredPgVgSliderChangeValue } from '../../actions/calculator'

function formatter(value) {
  return `${value}% / ${100 - value}%`;
}

const marks = {
  0: {
    style: {
      width: 20,
      marginLeft: 0,
      left: '-1%'
    },
    label: '0%'
  },
  20: '20%',
  30: '30%',
  50: '50%',
  70: '70%',
  80: '80%',
  100: {
    style: {
      width: 20,
      // marginLeft: 0,
      // right: '0',
      align: 'right'
    },
    label: '100%'
  }
};

class SliderPgVgDesired extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <Col
            sm={{ span: 1, order: 1 }}
            xs={{ span: 1, order: 1 }}
          >
            <h3>PG</h3>
          </Col>
          <Col
            sm={{ span: 3, order: 2 }}
            xs={{ span: 6, order: 2 }}
          >
            <InputNumber
              min={0}
              max={100}
              style={{ width: '100%' }}
              value={this.props.desiredPgPercent}
              onChange={(value) => this.props.desiredPgVgSliderChangeValue(value)}
            />
          </Col>
          <Col
            sm={{ span: 14, order: 3 }}
            xs={{ span: 24, order: 5 }}
          >
            <Slider
              tipFormatter={formatter}
              marks={marks}
              min={0}
              max={100}
              value={this.props.desiredPgPercent}
              onChange={(value) => this.props.desiredPgVgSliderChangeValue(value)}
            />
          </Col>
          <Col
            sm={{ span: 3, order: 4 }}
            xs={{ span: 6, order: 3 }}>
            <InputNumber
              min={0}
              max={100}
              style={{ width: '100%' }}
              value={this.props.desiredVgPercent}
              onChange={(value) => this.props.desiredPgVgSliderChangeValue(100 - value)} />
          </Col>
          <Col
            sm={{ span: 1, order: 5 }}
            xs={{ span: 1, order: 4 }}
          >
            <h3 style={{ textAlign: 'right' }}>VG</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => ({desiredPgPercent: state.calculator.desiredPgPercent, desiredVgPercent: state.calculator.desiredVgPercent}), {desiredPgVgSliderChangeValue})(SliderPgVgDesired);
