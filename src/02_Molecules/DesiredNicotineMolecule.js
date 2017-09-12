import React, { Component } from 'react';
import SliderNicotineDesired from '../01_Atoms/SliderNicotineDesired';
import { Row, Col } from 'antd';

class DesiredNicotineMolecule extends Component {
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
            <SliderNicotineDesired
              desiredNicotineStrength={this.props.desiredNicotineStrength}
              handleChangeNicotineDesired={this.props.handleChangeNicotineDesired} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DesiredNicotineMolecule;