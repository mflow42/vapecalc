import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';


const columns = [
  {
    title: 'Компонент',
    dataIndex: 'component',
    key: 'component',
    width: '40%',
  }, {
    title: 'Миллилитров',
    dataIndex: 'ml',
    key: 'ml',
    width: '20%',
  }, {
    title: 'Капель',
    dataIndex: 'drop',
    key: 'drop',
    width: '20%',
  }, {
    title: 'Граммов',
    dataIndex: 'gramm',
    key: 'gramm',
    width: '20%',
  }
];

// const COEFFICIENT_DROP = 33;
// const COEFFICIENT_GRAMM = 1.04;

// let components = [
//   {
//     name: "Основы",
//     ml: (props) => (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength)),
//     kd: COEFFICIENT_DROP,
//     kg: COEFFICIENT_GRAMM
//   }, {
//     name: "Ароматизаторов",
//     ml: (props) => (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100)),
//     kd: COEFFICIENT_DROP,
//     kg: COEFFICIENT_GRAMM
//   }, {
//     name: "PG",
//     ml: (props) => ((props.calculator.desiredMixVolume * props.calculator.desiredPgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.basePgPercent / 100) - (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100))),
//     kd: COEFFICIENT_DROP,
//     kg: COEFFICIENT_GRAMM
//   }, {
//     name: "VG",
//     ml: (props) => ((props.calculator.desiredMixVolume * props.calculator.desiredVgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.baseVgPercent / 100)),
//     kd: COEFFICIENT_DROP,
//     kg: COEFFICIENT_GRAMM
//   }, {
//     name: "Итого",
//     ml: (props) => (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength)) + (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100)) + ((props.calculator.desiredMixVolume * props.calculator.desiredPgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.basePgPercent / 100) - (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100))) + ((props.calculator.desiredMixVolume * props.calculator.desiredVgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.baseVgPercent / 100)),
//     kd: COEFFICIENT_DROP,
//     kg: COEFFICIENT_GRAMM
//   }
// ];



class MixResultOrganism extends Component {
  render() {
    // this.props.state.aroms.forEach((element) => {
    //   if (components.indexOf(element.name)) components.push({
    //     key: 'index',
    //     component: element.name,
    //     ml: 'ml.toFixed(2)',
    //     drop: '(ml * component.kd).toFixed(0)',
    //     gramm: '(ml * component.kg).toFixed(2)'
    //   });

    // }, this);
    for (var index = 5; index < this.props.state.components.length; index++) {
      // console.log(this.props.state.components[index])
    }
    let data = this.props.state.components.map((component, index) => {
      let ml = component.ml(this.props.state);
      return {
        key: index,
        component: component.name,
        ml: ml,
        drop: (ml * component.kd),
        gramm: (ml * component.kg)
      }
    })

    return (
      <div>
        <h2>Расчет</h2>
        <div style={{ height: '16px' }}></div>
        <Table
          showHeader={true}
          size={'middle'}
          pagination={false}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
}

export default connect(state => ({ state: state }), {})(MixResultOrganism);
