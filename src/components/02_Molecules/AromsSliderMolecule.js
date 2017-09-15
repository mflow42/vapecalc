import React, {Component} from 'react';
import {Slider, Row, Col} from 'antd';

const marks = {
  0: '0%',
  5: '5%',
  10: '10%'
};

let aromsList = [
  {
    ref: 'Black Tea (Черный чай)',
    name: 'Black Tea (Черный чай)',
    inputValue: 4
  }, {
    ref: 'Black Currant (Черная смородина)',
    name: 'Black Currant (Черная смородина)',
    inputValue: 2
  }
]

class AromsSliderMolecule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aroms: aromsList,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      aroms: {
        inputValue: value
      }
    })
  }

  render() {
    let aroms = this.state.aroms;
    return (
      <div>
        <h2>Ароматизаторы</h2>
        <div style={{height: '16px'}}></div>
        <div>
          {aroms.map(arom => 
            <div key={arom.name}>
              <Row type="flex" justify="space-between" align="middle">
                <Col
                  sm={{span: 6,order: 1}}
                  xs={{span: 24,order: 1}}>
                  <h3>{arom.name}</h3>
                </Col>
                <Col
                  sm={{span: 18,order: 2}}
                  xs={{span: 24,order: 2}}>
                  <Slider
                    ref={arom.ref}
                    marks={marks}
                    max={10}
                    defaultValue={0}
                    value={arom.inputValue}
                    onChange={this.onChange}
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