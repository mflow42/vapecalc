import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Layout, Menu, Row, Col, Button, Icon } from 'antd';
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
import './Template.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Template extends React.Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Row type="flex" align="center" >
            <Col xs={23} sm={20} md={16} lg={14} xl={12} >
            <Layout>
              <Sider
                breakpoint="md"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
              >
                <div className="logo" />
                <Menu
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={this.state.collapsed}
                >
                  <Menu.Item active ><Link to={`/calc/online/calculator`}><Icon type="calculator" />Калькулятор</Link></Menu.Item>

                  <SubMenu title={<span><Icon type='shopping-cart' />Покупки</span>}>
                    <Menu.Item><Link to={`/calc/online/mypurchases`}>Мои покупки/продажи</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/mywishlist`}>Список желаний</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/mypurchstat`}>Статистика покупок/продаж</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/myshoplist`}>Список магазинов</Link></Menu.Item>
                  </SubMenu>

                  <SubMenu title={<span><Icon type="share-alt" />Рецепты</span>}>
                    <Menu.Item><Link to={`/calc/online/recipesfav`}>Избранные рецепты</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/recipesmy`}>Мои рецепты</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/recipesall`}>Все рецепты</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/recipespick`}>Подбор рецептов</Link></Menu.Item>
                  </SubMenu>

                  <SubMenu title={<span><Icon type="dot-chart" />Жидкости</span>}>
                    <Menu.Item><Link to={`/calc/online/eliquids`}>Готовые жидкости</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/aroms`}>Ароматизаторы</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/components`}>Компоненты</Link></Menu.Item>
                  </SubMenu>

                  <Menu.Item><Link to={`/calc/online/info`}><Icon type="question-circle-o" />Справка</Link></Menu.Item>

                </Menu>
              </Sider>


              


                {/* <div style={{ width: 240 }}> */}
                {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                  <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button> */}
                {/* <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                  >
                    <Link to="/calc/online/main"><div className="logo" /></Link>
                    <Link className={"menu-link"} to="/calc/online/main">Главная</Link>
                    <Link className={"menu-link"} to="/calc/online/about">О нас</Link>
                    <Link to="/calc/online/auth"><a href="http://perehodinapar.ru/calc/index.php?app=core&module=global&section=login" className={"menu-link"}>Войти</a></Link> */}



                {/* <Menu
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={this.state.collapsed}
                >
                  <Menu.Item active ><Link to={`/calc/online/calculator`}><Icon type="calculator" />Калькулятор</Link></Menu.Item>

                  <SubMenu title={<span><Icon type='shopping-cart' />Покупки</span>}>
                    <Menu.Item><Link to={`/calc/online/mypurchases`}>Мои покупки/продажи</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/mywishlist`}>Список желаний</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/mypurchstat`}>Статистика покупок/продаж</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/myshoplist`}>Список магазинов</Link></Menu.Item>
                  </SubMenu>

                  <SubMenu title={<span><Icon type="share-alt" />Рецепты</span>}>
                    <Menu.Item><Link to={`/calc/online/recipesfav`}>Избранные рецепты</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/recipesmy`}>Мои рецепты</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/recipesall`}>Все рецепты</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/recipespick`}>Подбор рецептов</Link></Menu.Item>
                  </SubMenu>

                  <SubMenu title={<span><Icon type="dot-chart" />Жидкости</span>}>
                    <Menu.Item><Link to={`/calc/online/eliquids`}>Готовые жидкости</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/aroms`}>Ароматизаторы</Link></Menu.Item>
                    <Menu.Item><Link to={`/calc/online/components`}>Компоненты</Link></Menu.Item>
                  </SubMenu>

                  <Menu.Item><Link to={`/calc/online/info`}><Icon type="question-circle-o" />Справка</Link></Menu.Item>

                </Menu>
 */}

                {/* 
                    <Menu.Item key="1">
                      <Icon type="pie-chart" />
                      <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Icon type="desktop" />
                      <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Icon type="inbox" />
                      <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                      <Menu.Item key="5">Option 5</Menu.Item>
                      <Menu.Item key="6">Option 6</Menu.Item>
                      <Menu.Item key="7">Option 7</Menu.Item>
                      <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                      <Menu.Item key="9">Option 9</Menu.Item>
                      <Menu.Item key="10">Option 10</Menu.Item>
                      <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                      </SubMenu>
                    </SubMenu>
                  </Menu> */}
                {/* </div> */}
                <Layout>
                  <Header style={{ background: '#fff', padding: 0, height: 0 }}></Header>
                  <Content style={{ boxSizing: 'border-box', padding: '0' }}>
                    <div style={{ margin: '0' }}></div>
                    {/* <div style={{ margin: '24px 0' }}></div> */}
                    <Route path={`/calc/online/calculator`} component={Calculator} />
                    <Route path={`/calc/online/mypurchases`} component={Mypurchases} />
                    <Route path={`/calc/online/mywishlist`} component={Mywishlist} />
                    <Route path={`/calc/online/mypurchstat`} component={Mypurchstat} />
                    <Route path={`/calc/online/myshoplist`} component={Myshoplist} />
                    <Route path={`/calc/online/recipesfav`} component={Recipesfav} />
                    <Route path={`/calc/online/recipesmy`} component={Recipesmy} />
                    <Route path={`/calc/online/recipesall`} component={Recipesall} />
                    <Route path={`/calc/online/recipespick`} component={Recipespick} />
                    <Route path={`/calc/online/eliquids`} component={Eliquids} />
                    <Route path={`/calc/online/aroms`} component={Aroms} />
                    <Route path={`/calc/online/components`} component={Components} />
                    <Route path={`/calc/online/info`} component={Info} />
                  </Content>
                  <Footer style={{
                    textAlign: 'center'
                  }}>
                    Flaw Flow Design ©2017 Created by user42 & L4zySh4rk
               </Footer>
                </Layout>
              </Layout>
            </Col>
          </Row>
        </div>
      </ Router >

    );
  }
}







export default Template;
