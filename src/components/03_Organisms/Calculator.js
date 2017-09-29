import React, { Component } from 'react';
import BaseOrganism from '../03_Organisms/BaseOrganism';
import AromsOrganism from '../03_Organisms/AromsOrganism';
import DesiredOrganism from '../03_Organisms/DesiredOrganism';
import MixResultOrganism from '../03_Organisms/MixResultOrganism';

class Calculator extends Component {
  render() {
    return (
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <h1 style={{ textAlign: 'center' }} >Новый рецепт</h1>
          <BaseOrganism />
          <div style={{ height: '24px' }}></div>
          <AromsOrganism />
          <div style={{ height: '24px' }}></div>
          <DesiredOrganism />
          <div style={{ height: '24px' }}></div>
          <MixResultOrganism data={this.state} />
      </div>
    );
  };
}

export default Calculator;