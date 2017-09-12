import React, { Component } from 'react';
import SliderNicotineBase from '../01_Atoms/SliderNicotineBase';
import { Row, Col } from 'antd';

class BaseNicotineMolecule extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <Col
            sm={{ span: 3, oreder: 1 }}
            xs={{ span: 24, oreder: 1 }}>
            <h3>Никотин</h3>
          </Col>
          <Col
            sm={{ span: 21, oreder: 2 }}
            xs={{ span: 24, oreder: 2 }}>
            <SliderNicotineBase
              baseNicotineStrength={this.props.baseNicotineStrength}
              handleChangeNicotineBase={this.props.handleChangeNicotineBase} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BaseNicotineMolecule;