import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Menu, Layout, Icon } from 'antd';
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
const { Header, Content, Footer } = Layout;

const Main = ({ match }) => (
  <Router>
    <div>
      <Menu
        mode='horizontal'
      >
        <Menu.Item active ><Link to={`${match.url}`}><Icon type="calculator" />Калькулятор</Link></Menu.Item>

      </Menu>
      <Route exact path={`${match.url}`} component={Calculator} />
    </div>
  </ Router>
);

export default Main;



