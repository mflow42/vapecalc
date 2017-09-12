import React, {Component} from 'react';
import {Slider, InputNumber, Row, Col} from 'antd';

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
      marginLeft: 0,
      left: '96%'
    },
    label: '100%'
  }
};

class SliderPgVgDesired extends Component {
  constructor(props) {
    super(props);
    this.handleChangeDesiredVgPercent = this.handleChangeDesiredVgPercent.bind(this);
  }

  handleChangeDesiredVgPercent(value) {
    this.props.handleChangeDesiredPgPercent(100 - value);
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <h3>PG</h3>
          <Col span={2}>
            <InputNumber
              min={1}
              max={100}
              style={{
              width: '100%'
            }}
              value={this.props.desiredPgPercent}
              onChange={this.props.handleChangeDesiredPgPercent}/>
          </Col>
          <Col span={14}>
            <Slider
              marks={marks}
              min={1}
              max={100}
              value={this.props.desiredPgPercent}
              onChange={this.props.handleChangeDesiredPgPercent}/>
          </Col>
          <Col span={2}>
            <InputNumber
              min={1}
              max={100}
              style={{
              width: '100%'
            }}
              value={100 - this.props.desiredPgPercent}
              onChange={this.handleChangeDesiredVgPercent}/>
          </Col>
          <h3>VG</h3>
        </Row>
        <div style={{
          height: '24px'
        }}></div>
      </div>
    );
  }
}

export default SliderPgVgDesired;