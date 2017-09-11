import React, {Component} from 'react';
import SliderPgVgBase from '../01_Atoms/SliderPgVgBase';
import BaseNicotineMolecule from '../02_Molecules/BaseNicotineMolecule';

class BaseOrganism extends Component {
  render() {
    return (
      <div>
        <h2>Основа</h2>
        <div style={{
          height: '16px'
        }}></div>
        <BaseNicotineMolecule
          baseNicotineStrength={this.props.baseNicotineStrength}
          handleChangeNicotineBase={this.props.handleChangeNicotineBase}/>
        <SliderPgVgBase
          basePgPercent={this.props.basePgPercent}
          handleChangeBasePgPercent={this.props.handleChangeBasePgPercent}/>
      </div>
    );
  }
}

export default BaseOrganism;