import React, { Component } from 'react';
import { Slider, Row, Col, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { aromChangeCalculatorValue } from '../../actions/calculator'
import { aromRemoveFromCalculator } from '../../actions/calculator'
import './AromsSliderMolecule.css'

const marks = {
  0: '0%',
  10: '10%',
  20: '20%'
};

class AromsSliderMolecule extends Component {
  render() {
    return (
      <div>
        <h2>Ароматизаторы</h2>
        <div style={{ height: '16px' }}></div>
        <div>
          {this.props.state.calculator.aroms.map(arom =>
            <div key={arom.name}>
              <Row type="flex" justify="space-between" align="middle">
                <Col
                  sm={{ span: 8, order: 1 }}
                  xs={{ span: 24, order: 1 }}
                >
                  <h3 className={'align-top'} >{arom.name}</h3>
                </Col>
                <Col
                  sm={{ span: 14, order: 2 }}
                  xs={{ span: 22, order: 2 }}
                >
                  <Slider
                    marks={marks}
                    step={0.1}
                    max={20}
                    value={arom.value}
                    name={arom.name}
                    onChange={(value) => { this.props.aromChangeCalculatorValue(arom.name, value) } }
                  />
                </Col>
                <Col
                  sm={{ span: 1, order: 2 }}
                  xs={{ span: 1, order: 2 }}
                >
                  <Button
                    type="primary"
                    shape="circle"
                    icon="close"
                    size={'default'}
                    ghost={true}
                    onClick={()=> { this.props.aromRemoveFromCalculator(arom.name) }}
                  />
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(state => ({ state: state }), { aromChangeCalculatorValue })(AromsSliderMolecule);
