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
    ml: (props) => (props.desiredMixVolume / (props.baseNicotineStrength / props.desiredNicotineStrength))
  }
];

const componentAroms = [{
  ml: (component, calculator, aroms) => ( calculator.desiredMixVolume * component.value / 100)
}];

const componentsPgVg = [
  {
    name: "PG",
    ml: (calculator, aroms) => ((calculator.desiredMixVolume * calculator.desiredPgPercent / 100) - (calculator.desiredMixVolume / (calculator.baseNicotineStrength / calculator.desiredNicotineStrength) * calculator.basePgPercent / 100) - (calculator.desiredMixVolume * (calculator.aromsPercent / 100)))
  }, {
    name: "VG",
    ml: (calculator, aroms) => ((calculator.desiredMixVolume * calculator.desiredVgPercent / 100) - (calculator.desiredMixVolume / (calculator.baseNicotineStrength / calculator.desiredNicotineStrength) * calculator.baseVgPercent / 100))
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
        drop: (this.ml * COEFFICIENT_DROP).toFixed(0),
        gramm: (this.ml * COEFFICIENT_GRAMM).toFixed(2)
      }
    })

    let componentsAromsCalculation = this.props.aroms.map((component, index) => {
      // let ml = componentAroms.ml(component, this.props.aroms, this.props.calculator);
      // console.log(this.props)
      return {
        key: component.name,
        component: component.name,
        ml: (this.props.calculator.desiredMixVolume * this.props.aroms[index].value / 100).toFixed(2),
        drop: (this.ml * COEFFICIENT_DROP).toFixed(0),
        gramm: (this.ml * COEFFICIENT_GRAMM).toFixed(2)
      }
    })

    // const aromTotal = componentsAromsCalculation.reduce((arom, i) => arom += arom.ml, 0);
    console.log(componentsAromsCalculation)
    let componentsPgVgCalculation = componentsPgVg.map((component, index) => {
      return {
        key: component.name,
        component: component.name,
        ml: component.ml(this.props.calculator, this.props.aroms).toFixed(2),
        drop: (this.ml * COEFFICIENT_DROP).toFixed(0),
        gramm: (this.ml * COEFFICIENT_GRAMM).toFixed(2)
      }
    })

    let mixTotalCalculation = mixTotal.map((component, index) => {
      return {
        key: component.name,
        component: component.name,
        ml: component.ml(this.props.calculator, this.props.aroms).toFixed(2),
        drop: (this.ml * COEFFICIENT_DROP).toFixed(0),
        gramm: (this.ml * COEFFICIENT_GRAMM).toFixed(2)
      }
    })

    let data = [].concat(componentsBaseCalculation, componentsAromsCalculation, componentsPgVgCalculation, mixTotalCalculation);

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
