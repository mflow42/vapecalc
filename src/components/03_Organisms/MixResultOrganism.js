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

const COEFFICIENT_DROP = 33;
const COEFFICIENT_GRAMM = 1.04;

const components = [
  {
    name: "Основы",
    ml: (props) => (props.desiredMixVolume / (props.baseNicotineStrength / props.desiredNicotineStrength)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "Ароматизаторов",
    ml: (props) => (props.desiredMixVolume * (props.aromsPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "PG",
    ml: (props) => ((props.desiredMixVolume * props.desiredPgPercent / 100) - (props.desiredMixVolume / (props.baseNicotineStrength / props.desiredNicotineStrength) * props.basePgPercent / 100) - (props.desiredMixVolume * (props.aromsPercent / 100))),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "VG",
    ml: (props) => ((props.desiredMixVolume * props.desiredVgPercent / 100) - (props.desiredMixVolume / (props.baseNicotineStrength / props.desiredNicotineStrength) * props.baseVgPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "Итого",
    ml: (props) => (props.desiredMixVolume / (props.baseNicotineStrength / props.desiredNicotineStrength)) + (props.desiredMixVolume * (props.aromsPercent / 100)) + ((props.desiredMixVolume * props.desiredPgPercent / 100) - (props.desiredMixVolume / (props.baseNicotineStrength / props.desiredNicotineStrength) * props.basePgPercent / 100) - (props.desiredMixVolume * (props.aromsPercent / 100))) + ((props.desiredMixVolume * props.desiredVgPercent / 100) - (props.desiredMixVolume / (props.baseNicotineStrength / props.desiredNicotineStrength) * props.baseVgPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }
];

class MixResultOrganism extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.calculator)
    const data = components.map((component, index) => {
      let ml = component.ml(this.props.calculator);
      return {
        key: index,
        component: component.name,
        ml: ml.toFixed(2),
        drop: (ml * component.kd).toFixed(0),
        gramm: (ml * component.kg).toFixed(2)
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

export default connect(state => ({ calculator: state.calculator }), {})(MixResultOrganism);
