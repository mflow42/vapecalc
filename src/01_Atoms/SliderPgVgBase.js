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
  50: '50%',
  100: {
    style: {
      width: 20,
      marginLeft: 0,
      left: '96%'
    },
    label: '100%'
  }
};

class SliderPgVgBase extends Component {
  constructor(props) {
    super(props);
    this.handleChangeBaseVgPercent = this
      .handleChangeBaseVgPercent
      .bind(this);
  }
  handleChangeBaseVgPercent(value) {
    this
      .props
      .handleChangeBasePgPercent(100 - value);
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <Col xl={{
            span: 2
          }}>
            <h3>PG</h3>
          </Col>
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
              onChange={this.handleChangeBaseVgPercent}/>
          </Col>
          <Col xl={{
            span: 2
          }}>
            <h3 style={{
              textAlign: 'right'
            }}>VG</h3>
          </Col>
        </Row>
        <div style={{
          height: '24px'
        }}></div>
      </div>
    );
  }
}

export default SliderPgVgBase;