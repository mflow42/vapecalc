import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { desiredNicotineSliderChangeValue } from '../../actions/calculator'


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
  1: '1',
  '1.5': '1.5',
  3: '3',
  6: '6',
  9: '9',
  12: {
    style: {
      // width: 40,
      // marginLeft: 0,
      // right: '0',
      // align: 'right'
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
    label: '12 мг'
  }
};

class SliderNicotineDesired extends Component {
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
              value={this.props.desiredNicotineStrength}
              onChange={(value) => this.props.desiredNicotineSliderChangeValue(value)}
            />
          </Col>
          <Col
            sm={{ span: 18, order: 3 }}
            xs={{ span: 24, order: 3 }}
          >
            <Slider
              marks={marks}
              max={12}
              step={0.1}
              value={this.props.desiredNicotineStrength}
              onChange={(value) => this.props.desiredNicotineSliderChangeValue(value)}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => ({ desiredNicotineStrength: state.calculator.desiredNicotineStrength }), { desiredNicotineSliderChangeValue })(SliderNicotineDesired);
