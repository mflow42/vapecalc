import React, { Component } from 'react';
import { Slider, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { aromChangeValue } from '../../actions/aroms'

const marks = {
  0: '0%',
  5: '5%',
  10: '10%'
};

class AromsSliderMolecule extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }
  update(value) {
    console.dir(this);
    this.setState({
      inputValue: value,
    })
  }
  render() {
    return (
      <div>
        <h2>Ароматизаторы</h2>
        <div style={{ height: '16px' }}></div>
        <div>
          {this.props.aroms.map(arom =>
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
                    max={10}
                    value={arom.value}
                    onChange={this.update}
                    onAfterChange={(value) => this.props.aromChangeValue(, value)}
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

export default connect(state => ({ aroms: state}), { aromChangeValue })(AromsSliderMolecule);
