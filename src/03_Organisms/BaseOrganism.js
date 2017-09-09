
import React, { Component } from 'react';
import SliderNicotineInput from '../01_Atoms/SliderNicotineInput';
import { Slider, InputNumber, Row, Col } from 'antd';

// class extends Component {
//   render() {
//     return (

//       <h4>PG</h4>
//       <SliderPercent defaultValue={100} />
//       <h4>VG</h4>
//       <SliderPercent defaultValue={0} />


//     )
//   };
// };

class BaseOrganism extends Component {
  state = {
    inputValue: 1,
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <div>
        <h2>Основа</h2>
        <div style={{
          height: '16px'
        }}></div>
        <h3>Никотин</h3>
        <SliderNicotineInput />
        <Row type="flex" justify="space-between" align="middle">
          <Col span={1}><span style={{ marginLeft: 0 }}>PG</span>
          </Col>
          <Col span={4}>

            <InputNumber
              min={1}
              max={100}
              style={{ marginLeft: 20, width: 60 }}
              value={this.state.inputValue}
              onChange={this.onChange}
            />
          </Col>
          <Col span={10}>
            <Slider min={1} max={100} onChange={this.onChange} value={this.state.inputValue} />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={100}
              style={{ marginLeft: 0, width: 60 }}
              value={100 - this.state.inputValue}
              onChange={this.onChange}
            />

          </Col>
          <Col span={1}><span>VG</span>
          </Col>
        </Row>
        <div style={{
          height: '24px'
        }}></div>
      </div>
    );
  }
}

export default BaseOrganism;



