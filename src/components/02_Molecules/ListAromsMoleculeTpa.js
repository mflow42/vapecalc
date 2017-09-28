import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aromsListTpa } from '../01_Atoms/aromsList'
import { aromAdd, aromRemove } from '../../actions/aromsInCalc';
import { aromToggleSelection } from '../../actions/aromsList';
import '../02_Molecules/AromsModalMolecule.css';

class ListAromsMoleculeTpa extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.filter = this.filter.bind(this);
  }

  filter(e) {
    this.setState({
      filter: e.target.value,
    })
  }

  render() {
    let aroms = aromsListTpa;

    if (this.state.filter) {
      aroms = aroms.filter((arom, index) => arom.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }

    return (
      <div>
        <input type="text"
          onChange={this.filter}
          className={'ant-input ant-select-search__field'}
          placeholder="Введите название ароматизатора"
          style={{ width: "100%" }}
        />
        <div style={{ height: '16px' }}></div>
        {aroms.map((arom, index) => {
          return (
            <button
              key={arom.id}
              className={arom.selected ? 'arom-selected' : 'arom'}
              selected={arom.selected}
              onClick={
                () => {
                  if (arom.selected) {
                    this.props.aromRemove(arom.id, arom.name);
                    this.props.aromToggleSelection(arom.id, index);
                  } else {
                    this.props.aromAdd(arom.id, arom.name);
                    this.props.aromToggleSelection(arom.id, index);
                  }
                }
              }
            >{arom.name}
            </button>
          )
        })}
      </div>
    )
  }
}

export default connect(state => ({ aromsInCalc: state.aromsInCalc, aromsListTpa: state.aromsList.aromsListTpa }), { aromAdd, aromRemove, aromToggleSelection })(ListAromsMoleculeTpa)
