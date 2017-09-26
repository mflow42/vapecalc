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

const componentsBase = [
  {
    name: "Основы",
    ml: (props) => (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength)),
  }, {
    name: "PG",
    ml: (props) => ((props.calculator.desiredMixVolume * props.calculator.desiredPgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.basePgPercent / 100) - (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100))),
  }, {
    name: "VG",
    ml: (props) => ((props.calculator.desiredMixVolume * props.calculator.desiredVgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.baseVgPercent / 100)),
  }, {
    name: "Итого",
    ml: (props) => (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength)) + (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100)) + ((props.calculator.desiredMixVolume * props.calculator.desiredPgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.basePgPercent / 100) - (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100))) + ((props.calculator.desiredMixVolume * props.calculator.desiredVgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.baseVgPercent / 100)),
  }
];

// const componentAroms = []

// const aromTotal = console.log(this);

class MixResultOrganism extends Component {
  render() {
    let data = componentsBase.map((component, index) => {
      let ml = component.ml(this.props.state);
      return {
        key: index,
        component: component.name,
        ml: ml.toFixed(2),
        drop: (ml * COEFFICIENT_DROP).toFixed(0),
        gramm: (ml * COEFFICIENT_GRAMM).toFixed(2)
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
