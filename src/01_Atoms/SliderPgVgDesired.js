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
    this.handleChangeDesiredVgPercent = this
      .handleChangeDesiredVgPercent
      .bind(this);
  }

  handleChangeDesiredVgPercent(value) {
    this
      .props
      .handleChangeDesiredPgPercent(100 - value);
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <Col
          xl={{
            span: 2,
            order: 1
          }}
            xs={{
            span: 3,
            order: 1
          }}>
            <h3>PG</h3>
          </Col>
          <Col
            md={{
            span: 2,
            order: 2
          }}
            sm={{
            span: 3,
            order: 2
          }}
            xs={{
            span: 8,
            order: 2
          }}>
            <InputNumber
              min={0}
              max={100}
              style={{
              width: '100%'
            }}
              value={this.props.desiredPgPercent}
              onChange={this.props.handleChangeDesiredPgPercent}/>
          </Col>
          <Col
            md={{
            span: 14,
            order: 3
          }}
            sm={{
            span: 14,
            order: 3
          }}
            xs={{
            span: 24,
            order: 5
          }}>
            <Slider
              marks={marks}
              min={0}
              max={100}
              value={this.props.desiredPgPercent}
              onChange={this.props.handleChangeDesiredPgPercent}/>
          </Col>
          <Col
            md={{
            span: 2,
            order: 3
          }}
            sm={{
            span: 3,
            order: 3
          }}
            xs={{
            span: 8,
            order: 3
          }}>
            <InputNumber
              min={0}
              max={100}
              style={{
              width: '100%'
            }}
              value={100 - this.props.desiredPgPercent}
              onChange={this.handleChangeDesiredVgPercent}/>
          </Col>
          <Col 
          xl={{
            span: 2,
            order: 4
          }}
          xs={{
            span: 3,
            order: 4
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

export default SliderPgVgDesired;