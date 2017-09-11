
import React, { Component } from 'react';
import { InputNumber } from 'antd';

class InputNumberReverse extends InputNumber {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <h3>PG</h3>
          <Col span={3}>
            <InputNumber
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
            <InputNumber
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

export default InputNumberReverse;