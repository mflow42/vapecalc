import React, {Component} from 'react';
import {Slider} from 'antd';

const marks = {
  0: '0%',
  10: '10%',
  20: '20%',
  30: '30%'
};

class SliderAroms extends Component {
  
  state = {
    inputValue: this.props.aromsPercent
  };

  onChange = (value) => {
    this.setState({inputValue: value});
  }

  render() {
    return (
      <div>
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

export default SliderAroms;