import React, { Component } from 'react';
import SliderNicotineOutput from '../01_Atoms/SliderNicotineOutput';
import InputNumberAtom from '../01_Atoms/InputNumberAtom';
import { Row, Col } from 'antd';

class DesiredNicotineMolecule extends Component {
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
        <Row type="flex" align="middle">
          <Col span={5}><h3>Желаемый объем, мл</h3></Col>
          <Col span={4}><InputNumberAtom /></Col>
        </Row>
      </div>
    );
  }
}

export default DesiredNicotineMolecule;