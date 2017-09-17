import React, { Component } from 'react';
import AromsModalMolecule from '../02_Molecules/AromsModalMolecule';
import AromsSliderMolecule from '../02_Molecules/AromsSliderMolecule';

class AromsOrganism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aroms: [{
        ref: 'Black Tea (Черный чай)',
        name: 'Black Tea (Черный чай)',
        inputValue: 4
      }, {
        ref: 'Black Currant (Черная смородина)',
        name: 'Black Currant (Черная смородина)',
        inputValue: 7
      },
      ]
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
        <AromsSliderMolecule
          aromsPercent={this.props.aromsPercent}
          handleChangeAromsPercent={this.props.handleChangeAromsPercent}
          aroms={this.state.aroms}
        />
        <div style={{ height: '16px' }}></div>
        <AromsModalMolecule
          onAdd={this.onAdd}
          aroms={this.state.aroms}
        />
      </div>
    )
  };
};

export default AromsOrganism;
