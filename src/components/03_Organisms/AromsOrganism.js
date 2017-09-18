import React, { Component } from 'react';
import AromsModalMolecule from '../02_Molecules/AromsModalMolecule';
import AromsSliderMolecule from '../02_Molecules/AromsSliderMolecule';
import store from '../../reducers/store';

const state = store.getState();

class AromsOrganism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aroms: state.aromsToMix,
    };
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd = (e) => {
    let tmp = {
      ref: e.target.id,
      name: e.target.id,
      inputValue: 0
    };
    let joined = this.state.aroms.concat(tmp);
    this.setState({ aroms: joined })
  }

  render() {
    return (
      <div>
        <AromsSliderMolecule handleChangeAromsPercent={this.props.handleChangeAromsPercent} />
        <div style={{ height: '16px' }}></div>
        <AromsModalMolecule onAdd={this.onAdd} />
      </div>
    )
  };
};

export default AromsOrganism;
