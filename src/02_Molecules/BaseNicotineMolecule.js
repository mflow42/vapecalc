import React, {Component} from 'react';
import SliderNicotineBase from '../01_Atoms/SliderNicotineBase';
import {Row, Col} from 'antd';

class BaseNicotineMolecule extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <Col span={3}>
            <h3>Никотин</h3>
          </Col>
          <Col span={21}>
            <SliderNicotineBase
              baseNicotineStrength={this.props.baseNicotineStrength}
              handleChangeNicotineBase={this.props.handleChangeNicotineBase}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BaseNicotineMolecule;