import React, {Component} from 'react';
import SliderNicotineBase from '../01_Atoms/SliderNicotineBase';

class BaseNicotineMolecule extends Component {
  render() {
    return (
      <div>
        <h3>Никотин</h3>
        <SliderNicotineBase
          baseNicotineStrength={this.props.baseNicotineStrength}
          handleChangeNicotineBase={this.props.handleChangeNicotineBase}
          />
      </div>
    );
  }
}

export default BaseNicotineMolecule;