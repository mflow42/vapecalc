import React, {Component} from 'react';
import {Slider} from 'antd';

const marks = {
  0: '0%',
  10: '10%',
  20: '20%',
  30: '30%'
};

class AromsSliderMolecule extends Component {
  
  state = {
    inputValue: this.props.aromsPercent
  };

  onChange = (value) => {
    this.setState({inputValue: value});
  }

  render() {
    return (
      <div>
        <h2>Ароматизаторы</h2>
        <div style={{ height: '16px' }}></div>
        <Slider
          marks={marks}
          max={30}
          defaultValue={10}
          value={this.state.inputValue}
          onChange={this.onChange}
          onAfterChange={this.props.handleChangeAromsPercent}/>
      </div>
    );
  }
}

export default AromsSliderMolecule;