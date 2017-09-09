
import React, { Component } from 'react';
import { Slider, InputNumber, Input, Row, Col } from 'antd';

const marks = {
  0: {
    style: {
      color: 'grey-9',
      width: '20',
      'margin-left': '0',
      left: '-1.0101%',
    },
    label: <strong>0%</strong>,
  },
  20: '20%',
  30: '30%',
  50: '50%',
  70: '70%',
  80: '80%',
  100: {
    style: {
      color: 'grey-9',
      width: '20',
      'margin-left': '0',
      left: '96%',
    },
    label: <strong>100%</strong>,
  },
};

class SliderPgVgDesired extends Component {
  state = {
    inputValue: 30,
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <span><h3>PG</h3></span>
          <Col span={3}>
            <Input
              min={1}
              max={100}
              style={{ marginLeft: 0, width: 40 }}
              value={this.state.inputValue}
              onChange={this.onChange}
            />
          </Col>
          <Col span={10}>
            <Slider marks={marks} min={1} max={100} onChange={this.onChange} value={this.state.inputValue} />
          </Col>
          <Col span={4}>
            <Input
              min={1}
              max={100}
              style={{ marginLeft: 0, width: 40 }}
              value={100 - this.state.inputValue}
              onChange={this.onChange}
            />
          </Col>
          <span><h3>VG</h3></span>
        </Row>
        <div style={{ height: '24px' }}></div>
      </div>
    );
  }
}

export default SliderPgVgDesired;