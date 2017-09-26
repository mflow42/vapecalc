import React, {Component} from 'react';
import {Table} from 'antd';
import {connect} from 'react-redux';

const columns = [
  {
    title: 'Компонент',
    dataIndex: 'component',
    key: 'component',
    width: '40%'
  }, {
    title: 'Миллилитров',
    dataIndex: 'ml',
    key: 'ml',
    width: '20%'
  }, {
    title: 'Капель',
    dataIndex: 'drop',
    key: 'drop',
    width: '20%'
  }, {
    title: 'Граммов',
    dataIndex: 'gramm',
    key: 'gramm',
    width: '20%'
  }
];

const COEFFICIENT_DROP = 33;
const COEFFICIENT_GRAMM = 1.04;

const componentsBase = [
  {
    name: "Основы",
    ml: (calculator) => (calculator.desiredMixVolume / (calculator.baseNicotineStrength / calculator.desiredNicotineStrength))
  }
];

// const componentAroms = [{
//   ml: (component, calculator) => ( calculator.desiredMixVolume * component.value / 100)
// }];

const componentsPgVg = [
  {
    name: "PG",
    ml: (calculator, aromTotal, componentsBaseCalculation) => (
      (calculator.desiredMixVolume * calculator.desiredPgPercent / 100)
      - (componentsBaseCalculation * calculator.basePgPercent / 100)
      - aromTotal
    )
  }, {
    name: "VG",
    ml: (calculator) => (
      (calculator.desiredMixVolume * calculator.desiredVgPercent / 100)
      - (calculator.desiredMixVolume / (calculator.baseNicotineStrength / calculator.desiredNicotineStrength) * calculator.baseVgPercent / 100) )
  }
];


const mixTotal = [
  {
    name: "Итого",
    ml: (calculator) => (calculator.desiredMixVolume / (calculator.baseNicotineStrength / calculator.desiredNicotineStrength)) + (calculator.desiredMixVolume * (calculator.aromsPercent / 100)) + ((calculator.desiredMixVolume * calculator.desiredPgPercent / 100) - (calculator.desiredMixVolume / (calculator.baseNicotineStrength / calculator.desiredNicotineStrength) * calculator.basePgPercent / 100) - (calculator.desiredMixVolume * (calculator.aromsPercent / 100))) + ((calculator.desiredMixVolume * calculator.desiredVgPercent / 100) - (calculator.desiredMixVolume / (calculator.baseNicotineStrength / calculator.desiredNicotineStrength) * calculator.baseVgPercent / 100))
  }
];

class MixResultOrganism extends Component {
  render() {

    let componentsBaseCalculation = componentsBase.map((component, index) => {
      return {
        key: component.name,
        component: component.name,
        ml: component.ml(this.props.calculator).toFixed(2),
        drop: (component.ml(this.props.calculator) * COEFFICIENT_DROP).toFixed(0),
        gramm: (component.ml(this.props.calculator) * COEFFICIENT_GRAMM).toFixed(2),
      }
    })

    let componentsAromsCalculation = this.props.aroms.map((component, index) => {
      // let ml = componentAroms.ml(component, this.props.aroms, this.props.calculator);
      // console.log(this.props)
      return {
        key: component.name,
        component: component.name,
        ml: (this.props.calculator.desiredMixVolume * this.props.aroms[index].value / 100).toFixed(2),
        drop: ((this.props.calculator.desiredMixVolume * this.props.aroms[index].value / 100) * COEFFICIENT_DROP).toFixed(0),
        gramm: ((this.props.calculator.desiredMixVolume * this.props.aroms[index].value / 100) * COEFFICIENT_GRAMM).toFixed(2)
      }
    })

    const aromTotal = componentsAromsCalculation.reduce((sum, current, index) => sum + +current.ml, 0);

    let componentsPgVgCalculation = componentsPgVg.map((component, index) => {
      return {
        key: component.name,
        component: component.name,
        ml: component.ml(this.props.calculator, aromTotal, componentsBaseCalculation[0].ml).toFixed(2),
        drop: (component.ml(this.props.calculator, aromTotal, componentsBaseCalculation[0].ml) * COEFFICIENT_DROP).toFixed(0),
        gramm: (component.ml(this.props.calculator, aromTotal, componentsBaseCalculation[0].ml) * COEFFICIENT_GRAMM).toFixed(2)
      }
    })

    let mixTotalCalculation = mixTotal.map((component, index) => {
      return {
        key: component.name,
        component: component.name,
        ml: (+componentsBaseCalculation[0].ml + aromTotal + +componentsPgVgCalculation[0].ml + +componentsPgVgCalculation[1].ml).toFixed(2),
        drop: ((+componentsBaseCalculation[0].ml + aromTotal + +componentsPgVgCalculation[0].ml + +componentsPgVgCalculation[1].ml) * COEFFICIENT_DROP).toFixed(0),
        gramm: ((+componentsBaseCalculation[0].ml + aromTotal + +componentsPgVgCalculation[0].ml + +componentsPgVgCalculation[1].ml) * COEFFICIENT_GRAMM).toFixed(2)
      }
    })

    let data = [].concat(componentsBaseCalculation, componentsAromsCalculation, componentsPgVgCalculation, mixTotalCalculation);
// console.log(data)
    return (
      <div>
        <h2>Расчет</h2>
        <div style={{
          height: '16px'
        }}></div>
        <Table
          showHeader={true}
          size={'middle'}
          pagination={false}
          columns={columns}
          dataSource={data}/>
      </div>
    );
  }
}

export default connect(state => ({calculator: state.calculator, aroms: state.aroms}), {})(MixResultOrganism);
