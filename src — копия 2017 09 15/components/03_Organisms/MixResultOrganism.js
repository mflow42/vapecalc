import React, {Component} from 'react';
import {Table, message} from 'antd';

const error = () => {
  message.error('This is a message of error');
};

const columns = [
  {
    title: 'Компонент',
    dataIndex: 'component',
    key: 'component'
    // width: 250,
  }, {
    title: 'Миллилитров',
    dataIndex: 'ml',
    key: 'ml'
    // width: 200,
  }, {
    title: 'Капель',
    dataIndex: 'drop',
    key: 'drop'
    // width: 200,
  }, {
    title: 'Граммов',
    dataIndex: 'gramm',
    key: 'gramm'
    // width: 200,
  }
];

const COEFFICIENT_DROP = 33;
const COEFFICIENT_GRAMM = 1.04;

const components = [
  {
    name: "Основы",
    ml: (props) => (props.data.desiredVolume / (props.data.baseNicotineStrength / props.data.desiredNicotineStrength)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "Ароматизаторов",
    ml: (props) => (props.data.desiredVolume * (props.data.aromsPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "PG",
    ml: (props) => ((props.data.desiredVolume * props.data.desiredPgPercent / 100) - (props.data.desiredVolume / (props.data.baseNicotineStrength / props.data.desiredNicotineStrength) * props.data.basePgPercent / 100) - (props.data.desiredVolume * (props.data.aromsPercent / 100))),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "VG",
    ml: (props) => ((props.data.desiredVolume * props.data.desiredVgPercent / 100) - (props.data.desiredVolume / (props.data.baseNicotineStrength / props.data.desiredNicotineStrength) * props.data.baseVgPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "Итого",
    ml: (props) => (props.data.desiredVolume / (props.data.baseNicotineStrength / props.data.desiredNicotineStrength)) + (props.data.desiredVolume * (props.data.aromsPercent / 100)) + ((props.data.desiredVolume * props.data.desiredPgPercent / 100) - (props.data.desiredVolume / (props.data.baseNicotineStrength / props.data.desiredNicotineStrength) * props.data.basePgPercent / 100) - (props.data.desiredVolume * (props.data.aromsPercent / 100))) + ((props.data.desiredVolume * props.data.desiredVgPercent / 100) - (props.data.desiredVolume / (props.data.baseNicotineStrength / props.data.desiredNicotineStrength) * props.data.baseVgPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }
];

class MixResultOrganism extends Component {

  render() {
    const data = components.map((component, index) => {
      let ml = component.ml(this.props);
      // if (ml < 0) ml = 0;
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
        <div style={{height: '16px'}}></div>
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

export default MixResultOrganism;