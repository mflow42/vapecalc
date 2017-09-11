
import React, { Component } from 'react';
import { Slider, InputNumber, Input, Row, Col } from 'antd';

const marks = {
  0: {
    style: {
      width: '20',
      'margin-left': '0',
      left: '-1.0101%',
    },
    label: '0%',
  },
  50: '50%',
  100: {
    style: {
      width: '20',
      'margin-left': '0',
      left: '96%',
    },
    label: '100%',
  },
};

class SliderPgVgBase extends Component {
  state = {
    inputValue: 100,
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
        <h3>PG</h3>
        <Col span={2}>
          <InputNumber
            min={1}
            max={100}
            style={{ marginLeft: 0, width: '100%',  }}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
        <Col span={14}>
          <Slider marks={marks} min={1} max={100} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={2}>
          <InputNumber
            min={1}
            max={100}
            style={{ marginLeft: 0, width: '100%' }}
            value={100 - this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
        <h3>VG</h3>
      </Row>
        <div style={{ height: '24px' }}></div>
      </div>
    );
  }
}

export default SliderPgVgBase;