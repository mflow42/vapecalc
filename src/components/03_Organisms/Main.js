import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Calculator from '../03_Organisms/Calculator';
import Mypurchases from '../03_Organisms/Mypurchases';
import Mywishlist from '../03_Organisms/Mywishlist';
import Mypurchstat from '../03_Organisms/Mypurchstat';
import Myshoplist from '../03_Organisms/Myshoplist';
import Recipesfav from '../03_Organisms/Recipesfav';
import Recipesmy from '../03_Organisms/Recipesmy';
import Recipesall from '../03_Organisms/Recipesall';
import Recipespick from '../03_Organisms/Recipespick';
import Eliquids from '../03_Organisms/Eliquids';
import Aroms from '../03_Organisms/Aroms';
import Components from '../03_Organisms/Components';
import Info from '../03_Organisms/Info';

const SubMenu = Menu.SubMenu;

const Main = ({ match }) => (
  <Router>
    <div>
      <Menu mode='horizontal'>
        {/* <Menu.Item active ><Link to={`${match.url}`}><Icon type="calculator" />Калькулятор</Link></Menu.Item> */}

        {/* <SubMenu title={<span><Icon type='shopping-cart' />Покупки</span>}>
          <Menu.Item><Link to={`${match.url}/mypurchases`}>Мои покупки/продажи</Link></Menu.Item>
          <Menu.Item><Link to={`${match.url}/mywishlist`}>Список желаний</Link></Menu.Item>
          <Menu.Item><Link to={`${match.url}/mypurchstat`}>Статистика покупок/продаж</Link></Menu.Item>
          <Menu.Item><Link to={`${match.url}/myshoplist`}>Список магазинов</Link></Menu.Item>
        </SubMenu>

        <SubMenu title={<span><Icon type="share-alt" />Рецепты</span>}>
          <Menu.Item><Link to={`${match.url}/recipesfav`}>Избранные рецепты</Link></Menu.Item>
          <Menu.Item><Link to={`${match.url}/recipesmy`}>Мои рецепты</Link></Menu.Item>
          <Menu.Item><Link to={`${match.url}/recipesall`}>Все рецепты</Link></Menu.Item>
          <Menu.Item><Link to={`${match.url}/recipespick`}>Подбор рецептов</Link></Menu.Item>
        </SubMenu>

        <SubMenu title={<span><Icon type="dot-chart" />Жидкости</span>}>
          <Menu.Item><Link to={`${match.url}/eliquids`}>Готовые жидкости</Link></Menu.Item>
          <Menu.Item><Link to={`${match.url}/aroms`}>Ароматизаторы</Link></Menu.Item>
          <Menu.Item><Link to={`${match.url}/components`}>Компоненты</Link></Menu.Item>
        </SubMenu>

        <Menu.Item><Link to={`${match.url}/info`}><Icon type="question-circle-o" />Справка</Link></Menu.Item> */}

      </Menu>
      <Route exact path={`${match.url}`} component={Calculator} />
      {/* <Route path={`${match.url}/mypurchases`} component={Mypurchases} />
      <Route path={`${match.url}/mywishlist`} component={Mywishlist} />
      <Route path={`${match.url}/mypurchstat`} component={Mypurchstat} />
      <Route path={`${match.url}/myshoplist`} component={Myshoplist} />
      <Route path={`${match.url}/recipesfav`} component={Recipesfav} />
      <Route path={`${match.url}/recipesmy`} component={Recipesmy} />
      <Route path={`${match.url}/recipesall`} component={Recipesall} />
      <Route path={`${match.url}/recipespick`} component={Recipespick} />
      <Route path={`${match.url}/eliquids`} component={Eliquids} />
      <Route path={`${match.url}/aroms`} component={Aroms} />
      <Route path={`${match.url}/components`} component={Components} />
      <Route path={`${match.url}/info`} component={Info} /> */}
    </div>
  </ Router>
);

export default Main;



