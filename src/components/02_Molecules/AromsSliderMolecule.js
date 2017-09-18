import React, { Component } from 'react';
import { Slider, Row, Col } from 'antd';
import store from '../../reducers/store';

const state = store.getState();

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
          {state.aromsToMix.map(arom =>
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
                    ref={arom.ref}
                    marks={marks}
                    max={10}
                    defaultValue={0}
                    value={0}
                    onChange={this.update}
                    onAfterChange={this.props.handleChangeAromsPercent}
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

export default AromsSliderMolecule;
