import React, {Component} from 'react';
import {Slider, InputNumber, Input, Row, Col} from 'antd';

const marks = {
  0: {
    style: {
      width: '20',
      'margin-left': '0',
      left: '-1.0101%'
    },
    label: '0%'
  },
  50: '50%',
  100: {
    style: {
      width: '20',
      'margin-left': '0',
      left: '96%'
    },
    label: '100%'
  }
};

class SliderPgVgBase extends Component {
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
              value={this.props.basePgPercent}
              onChange={this.props.handleChangeBasePgPercent}/>
          </Col>
          <Col span={14}>
            <Slider
              marks={marks}
              min={1}
              max={100}
              value={this.props.basePgPercent}
              onChange={this.props.handleChangeBasePgPercent}/>
          </Col>
          <Col span={2}>
            <InputNumber
              min={1}
              max={100}
              style={{
                width: '100%'
              }}
              value={100 - this.props.basePgPercent}
              onChange={this.props.handleChangeBasePgPercent}/>
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

export default SliderPgVgBase;