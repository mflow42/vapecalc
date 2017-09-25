import React, { Component } from 'react';
import { Slider, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { aromChangeValue } from '../../actions/aroms'
import { aromChangeCalcValue } from '../../actions/calculator'

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
          {this.props.state.aroms.map(arom =>
            <div key={arom.name}>
              <Row type="flex" justify="space-between" align="middle">
                <Col
                  sm={{ span: 6, order: 1 }}
                  xs={{ span: 24, order: 1 }}>
                  <h3>{arom.name}</h3>
                </Col>
                <Col
                  sm={{ span: 18, order: 2 }}
                  xs={{ span: 24, order: 2 }}>
                  <Slider
                    marks={marks}
                    step={0.1}
                    max={20}
                    value={arom.value}
                    name={arom.name}
                    onChange={(value) => {
                      this.props.aromChangeValue(arom.name, value);
                      this.props.aromChangeCalcValue(arom.name, value);
                      }
                    }
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

export default connect(state => ({ state: state }), { aromChangeValue, aromChangeCalcValue })(AromsSliderMolecule);
