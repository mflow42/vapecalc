import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Template from '../04_Template/Template';

class Page extends Component {
  render() {
    return (
      <div>
        <Row type="flex" align="center">
          <Col xs={24} sm={20} md={16} lg={14} xl={12}>
            <Template />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Page;
