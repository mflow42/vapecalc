import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

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
    this.state = {
      inputValue: this.props.basePgPercent,
    };
    this.onChange = this.onChange.bind(this);
    this.handleChangeBasePgPercentWithChangingState = this.handleChangeBasePgPercentWithChangingState.bind(this);
    this.handleChangeBaseVgPercentWithChangingState = this.handleChangeBaseVgPercentWithChangingState.bind(this);
  }

  onChange = (value) => {
    this.setState({
      inputValue: value,
    })
  }
  handleChangeBasePgPercentWithChangingState = (value) => {
    this.onChange(value);
    this.props.handleChangeBasePgPercent(value);
  }
  handleChangeBaseVgPercentWithChangingState = (value) => {
    this.onChange(100 - value);
    this.props.handleChangeBasePgPercent(100 - value);
  }

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
            md={{ span: 3, order: 2 }}
            sm={{ span: 3, order: 2 }}
            xs={{ span: 8, order: 2 }}
          >
            <InputNumber
              min={0}
              max={100}
              style={{width: '100%'}}
              value={this.state.inputValue}
              onChange={this.handleChangeBasePgPercentWithChangingState}
            />
          </Col>
          <Col
            md={{ span: 14, order: 3 }}
            sm={{ span: 14, order: 3 }}
            xs={{ span: 24, order: 5 }}
          >
            <Slider
              tipFormatter={formatter}
              marks={marks}
              min={0}
              max={100}
              value={this.state.inputValue}
              onChange={this.onChange}
              onAfterChange={this.props.handleChangeBasePgPercent}
            />
          </Col>
          <Col
            md={{ span: 3, order: 3 }}
            sm={{ span: 3, order: 3 }}
            xs={{ span: 8, order: 3 }}
          >
            <InputNumber
              min={0}
              max={100}
              style={{width: '100%'}}
              value={100 - this.state.inputValue}
              onChange={this.handleChangeBaseVgPercentWithChangingState}
            />
          </Col>
          <Col
            sm={{ span: 1, order: 4 }}
            xs={{ span: 1, order: 4 }}
          >
            <h3 style={{ textAlign: 'right' }}>VG</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SliderPgVgBase;
