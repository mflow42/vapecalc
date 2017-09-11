import React, {Component} from 'react';
import SliderNicotineDesired from '../01_Atoms/SliderNicotineDesired';

class DesiredNicotineMolecule extends Component {
  render() {
    return (
      <div>
        <h3>Никотин</h3>
        <SliderNicotineDesired
          desiredNicotineStrength={this.props.desiredNicotineStrength}
          handleChangeNicotineDesired={this.props.handleChangeNicotineDesired}/>
      </div>
    );
  }
}

export default DesiredNicotineMolecule;