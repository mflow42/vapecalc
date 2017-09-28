import React, { Component } from 'react';
import { Slider, Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { aromChangeValue, aromRemove } from '../../actions/aromsInCalc'
import { aromToggleSelection } from '../../actions/aromsList'
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
          {this.props.aromsInCalc.map((arom, index, arr) =>
            <div key={arom.id}>
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
                    id={arom.id}
                    step={0.1}
                    max={20}
                    name={arom.name}
                    value={arom.value}
                    onChange={(value) => { this.props.aromChangeValue(arom.id, value) }}
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
                    onClick={() => {
                      this.props.aromRemove(arom.id, index);
                      this.props.aromToggleSelection(arom.id, arom.index)
                    }}
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

export default connect(state => ({ aromsInCalc: state.aromsInCalc, aromsListTpa: state.aromsList.aromsListTpa }), { aromChangeValue, aromRemove, aromToggleSelection })(AromsSliderMolecule);
