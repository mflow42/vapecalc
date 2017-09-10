import React, { Component } from 'react';
import { InputNumber } from 'antd';

class InputNumberAtom extends Component {
  render() {
    return <InputNumber defaultValue={30}/>;
  }
}

export default InputNumberAtom;