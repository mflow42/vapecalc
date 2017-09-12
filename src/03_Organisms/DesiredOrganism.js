import React, {Component} from 'react';
import SliderPgVgDesired from '../01_Atoms/SliderPgVgDesired';
import DesiredNicotineMolecule from '../02_Molecules/DesiredNicotineMolecule';
import DesiredVolumeMolecule from '../02_Molecules/DesiredVolumeMolecule';

class DesiredOrganism extends Component {
  render() {
    return (
      <div>
        <h2>Ожидаемый результат</h2>
        <div style={{
          height: '16px'
        }}></div>
        <DesiredNicotineMolecule
          desiredNicotineStrength={this.props.desiredNicotineStrength}
          handleChangeNicotineDesired={this.props.handleChangeNicotineDesired}/>
        <SliderPgVgDesired
          desiredPgPercent={this.props.desiredPgPercent}
          handleChangeDesiredPgPercent={this.props.handleChangeDesiredPgPercent}/>
        <div style={{
          height: '8px'
        }}></div>
        <DesiredVolumeMolecule
          desiredVolume={this.props.desiredVolume}
          handleChangeDesiredVolume={this.props.handleChangeDesiredVolume}/>
      </div>
    );
  }
}

export default DesiredOrganism;