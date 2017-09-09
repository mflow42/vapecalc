
import React, { Component } from 'react';
import SliderNicotineOutput from '../01_Atoms/SliderNicotineOutput';
import { Slider, InputNumber, Row, Col } from 'antd';
import { Input } from 'antd';

const marks = {
  0: '0',
  50: '50%',
  100: '100',
};

class DesiredOrganism extends Component {
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
        <h2>Ожидаемый результат</h2>
        <div style={{ height: '16px' }}></div>
        <h3>Никотин</h3>
        <SliderNicotineOutput onChange={value => this.setState({ nicotine: value })} />
        <Row type="flex" justify="space-between" align="middle">
          <span><h3>PG</h3></span>
          <Col span={4}>
            <Input
              min={1}
              max={100}
              style={{ marginLeft: 20, width: 100 }}
              value={this.state.inputValue}
              onChange={this.onChange}
            />
          </Col>
          <Col span={14}>
            <Slider marks={marks} min={1} max={100} onChange={this.onChange} value={this.state.inputValue} />
          </Col>
          <Col span={4}>
            <Input
              min={1}
              max={100}
              style={{ marginLeft: 0, width: 100 }}
              value={100 - this.state.inputValue}
              onChange={this.onChange}
            />
          </Col>
          <span><h3>VG</h3></span>
        </Row>
        <div style={{
          height: '24px'
        }}>
        </div>
      </div>
    )
  };
};

export default DesiredOrganism;