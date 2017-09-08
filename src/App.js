import React, {Component} from 'react';
import {Row, Col} from 'antd';
import LayoutOrganism from './LayoutOrganism';


class App extends Component {
  render() {
    return (
      <div>
        <Row type="flex" align="center">
          <Col xs={24} sm={24} md={24} lg={14} xl={8}>
            <LayoutOrganism />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
