import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Компонент',
  dataIndex: 'component',
  key: 'component',
  // width: 250,
}, {
  title: 'Миллилитров',
  dataIndex: 'ml',
  key: 'ml',
  // width: 200,
}, {
  title: 'Капель',
  dataIndex: 'drop',
  key: 'drop',
  // width: 200,
}, {
  title: 'Граммов',
  dataIndex: 'gramm',
  key: 'gramm',
  // width: 200,
}];


const components = [
  {name: "12", kk: 0.8, kg: 1.1, mm: (props) => props.pg * 2},
];

const showHeader = true;

class MixResultOrganism extends Component {
  state = {
    bordered: false,
    size: 'middle',
    showHeader,
    scroll: undefined,
    pagination: false,
  }
 
  render() {
    const state = this.state;
    const ds = components.map((component, index) => {
      const mm = component.mm(this.props);
      return {
      key: index,
      component: component.name,
      ml: mm,
      drop: mm * component.kk,
      gramm: `${i}2`,
    }})
    return (
      <div>
        <h2>Расчет</h2>

        <div style={{ height: '16px' }}></div>
        <Table {...this.state} columns={columns} dataSource={data} />
      </div>
    );
  }
}


export default MixResultOrganism;