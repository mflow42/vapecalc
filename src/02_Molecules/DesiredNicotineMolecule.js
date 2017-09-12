import React, {Component} from 'react';
import SliderNicotineDesired from '../01_Atoms/SliderNicotineDesired';
import {Row, Col} from 'antd';

class DesiredNicotineMolecule extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <h3>Никотин</h3>
          <Col span={21}>
            <SliderNicotineDesired
              desiredNicotineStrength={this.props.desiredNicotineStrength}
              handleChangeNicotineDesired={this.props.handleChangeNicotineDesired}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DesiredNicotineMolecule;