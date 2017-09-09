import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;

class MenuOrganism extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <div style={{ margin: '24px 0' }}></div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode='horizontal'
        >
          <SubMenu title={<span><Icon type='shopping-cart' />Покупки</span>}>
            <Menu.Item key='setting:1'>Мои покупки/продажи</Menu.Item>
            <Menu.Item key="setting:2">Список желаний</Menu.Item>
            <Menu.Item key="setting:3">Статистика покупок/продаж</Menu.Item>
            <Menu.Item key="setting:4">Список магазинов</Menu.Item>
          </SubMenu>

          <SubMenu title={<span><Icon type="share-alt" />Рецепты</span>}>
            <Menu.Item key="setting:5">Избранные рецепты</Menu.Item>
            <Menu.Item key="setting:6">Мои рецепты</Menu.Item>
            <Menu.Item key="setting:7">Все рецепты</Menu.Item>
            <Menu.Item key="setting:8">Подбор рецептов</Menu.Item>
          </SubMenu>

          <SubMenu title={<span><Icon type="dot-chart" />Жидкости</span>}>
            <Menu.Item key="setting:9">Готовые жидкости</Menu.Item>
            <Menu.Item key="setting:10">Ароматизаторы</Menu.Item>
            <Menu.Item key="setting:11">Компоненты</Menu.Item>
          </SubMenu>

          <Menu.Item key="info">
            <Icon type="question-circle-o" />Справка
        </Menu.Item>

        </Menu>
      </div>
    );
  }
}

export default MenuOrganism;