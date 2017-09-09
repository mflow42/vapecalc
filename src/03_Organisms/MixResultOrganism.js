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

const data = [];
for (let i = 1; i <= 4; i++) {
  data.push({
    key: i,
    component: 'Component',
    ml: `${i}2`,
    drop: `${i}2`,
    gramm: `${i}2`,
  });
}

const showHeader = true;

class MixResultOrganism extends Component {
  state = {
    bordered: false,
    size: 'small',
    showHeader,
    scroll: undefined,
    pagination: false,
  }


  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  
  render() {
    const state = this.state;
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