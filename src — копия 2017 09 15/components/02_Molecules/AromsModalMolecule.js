import React, { Component } from 'react';
import { Modal, Button, } from 'antd';
import '../02_Molecules/AromsModalMolecule.css';

const aromsList = [
  'Absinthe (Абсент)',
  'Acai (Ягода асаи)',
  'Acetyl Pyrazine (Ацетил пиразин)',
  'Almond (Миндаль)',
  'Apple (Яблоко)',
  'Apple (tart granny smith) (Яблоко (Гренни Смит))',
  'Apple Candy (Яблочный мармелад)',
  'Apple Pie (Яблочный пирог)',
  'Apricot (Абрикос)',
  'Banana (Банан)',
  'Banana Cream (Банановый крем)',
  'Banana Nut Bread (Банановый хлеб)',
  'Bananas Foster (Банановый фостер)',
  'Bavarian Cream (Баварский крем)',
  'Berry Crunch (Ягодные хлопья)',
  'Bitter Nut Extra (Горький орех)',
  'Bittersweet Chocolate (Биттерсвит шоколад)',
  'Black Cherry (Черешня)',
  'Black Currant (Черная смородина)',
  'Black Honey (Черный мед и табак)',
  'Black Tea (Черный чай)',
  'Blackberry (Ежевика)',
  'Blue Raspberry (Голубая малина)',
  'Blueberry (Extra) (Черника)',
  'Blueberry Candy (Черничные леденцы)',
  'Blueberry Wild (Дикая черника)',
  'Boysenberry (Шелковица )',
  'Brandy (Бренди)',
  'Brown Sugar (Коричневый сахар)',
  'Bubblegum (Жвачка)',
  'Bubblegum (Fruity) (Жвачка (Фруктовая))',
  'Butter (Масло)',
  'Butterscotch (Ирис)',
  'Cantaloupe (Канталупа)',
  'Cappucсino (Каппучино)',
  'Caramel (Карамель)',
  'Caramel (Original) (Карамель (Оригинальная))',
  'Caramel Candy (Карамельная конфета)',
  'Caramel Cappuccino (Карамель-каппучино)',
  'Chai Tea (Чай)',
  'Champagne (Шампанское)',
  'Cheesecake (Чизкейк)',
  'Cheesecake (Graham Crust) (Чизкейк (корочка))',
  'Cherry Blossom (Цветущая вишня)',
  'Cherry Extract (Экстракт вишни)',
  'Chocolate (Шоколад)',
  'Cinnamon (Корица)',
  'Cinnamon Danish (Корица датская)',
  'Cinnamon Red Hot (Корица)',
  'Cinnamon Spice (Острая корица)',
  'Cinnamon Sugar Cookie (Печенье с корицей)',
  'Citrus Punch (Цитрусовый пунш)',
  'Clove (Гвоздика)',
  'Cocoa Rounds (Шоколадные шарики)',
  'Coconut (Кокос)',
  'Coconut (Extra) (Кокос (Экстра))',
  'Coconut Candy (Кокосовые конфеты)',
  'Coffee (Кофе)',
  'Cotton Candy (Сладкая вата)',
  'Cranberry (Клюква)',
  'Cream Soda (Крем-сода)',
  'Creme de Menthe (Сладкий мятный ликер)',
  'Cucumber (Огурец)',
  'Dairy/Milk (Молоко)',
  'DK Tobacco Base (Табак)',
  'Double Chocolate (Clear) (Двойной шоколад)',
  'Double Chocolate (Dark) (Двойной шоколад (Темный))',
  'Dragonfruit (Драгонфрут (питайя))',
  'Dulce de Leche (Сгущенное молоко)',
  'Earl Grey Tea (Эрл-грей)',
  'Elderberry (Бузина)',
  'Energy Drink (Энергетический напиток)',
  'English Toffee (Тоффи)',
  'Espresso (Эспрессо)',
  'Ethyl Maltol (Этил мальтол)',
  'French Vanilla (Французкая ваниль)',
  'French Vanilla Deluxe (Французкая ваниль (Делюкс))',
  'Frosted Donut (Пончик)',
  'Fruit Circles (Фруктовые кольца)',
  'Fruit Circles With Milk (Фруктовые кольца с молоком)',
  'Fruity Stick Gum (Жвачка (Fruity Stick))',
  'Fudge Brownie (Брауни)',
  'Ginger Ale (Имбирный Эль)',
  'Gingerbread (Имбирный пряник)',
  'Graham Cracker (Грэхем крекер)',
  'Graham Cracker Clear (Грэхем крекер)',
  'Grape Candy (Виноградные леденцы)',
  'Grape Juice (Виноградный сок)',
  'Greek Yogurt (Греческий йогурт)',
  'Green Apple (Зеленое яблоко)',
  'Green Tea (Зеленый чай)',
  'Guava (Гуайява)',
  'Gummy Candy (Тянучки)',
  'Hazelnut (Лесной орех)',
  'Hibiscus (Гибискус)',
  'Honey (Мед)',
  'Honeydew (Медовая дыня)',
  'Honeydew II (Медовая дыня (версия 2))',
  'Honeysuckle (Жимолость)',
  'Horehound (Шандра)',
  'Huckleberry (Хаклберри)',
  'Irish Cream (Ирландские сливки)',
  'Jackfruit (Джекфрут)',
  'Jamaican Rum (Ямайский ром)',
  'Kalua and Cream (Калуа и сливки)',
  'Kentucky Bourbon (Бурбон из Кентукки)',
  'Key Lime (Лайм)',
  'Kiwi (Киви)',
  'Kiwi (Double) (Киви (двойной))',
  'Koolada 10 PG (Кулада)',
  'Lemon (water soluble) (Лимон)',
  'Lemon 2 (Лимон (Версия 2))',
  'Lemon Lime (Лимон-лайм)',
  'Lemon Lime 2 (Лимон лайм (версия 2))',
  'Lemonade Cookie (Лимонадное печенье)',
  'Lucky Leprechaun Cereal (Зефирные хлопья)',
  'Lychee (Личи)',
  'M Type Premium (Эм тайп премиум (табак))',
  'Malted milk (Сухое молоко)',
  'Mango (Манго)',
  'Maple Extract (Кленовый экстракт)',
  'Maple Syrup (Кленовый сироп)',
  'Marshmallow (Маршмеллоу)',
  'Mary Jane (Мери Джейн)',
  'Menthol liquid (Ментол)',
  'Meringue (Безе)',
  'Milk Chocolate (Молочный шоколад)',
  'Mojito Havana (Мохито)',
  'Molasses (Меласса)',
  'Musk Candy (Конфеты Musk Lifesaver)',
  'Nectarine (Нектарин)',
  'Oatmeal Cookie (Овсянное печенье)',
  'Orange Cream (Апельсиновый крем)',
  'Orange Mandarin (Мандарин)',
  'Pancake (Панкейк)',
  'Papaya (Папайя)',
  'Passion Fruit (Маракуйя)',
  'Peach (Персик)',
  'Peach (Juicy) (Сок персика)',
  'Peanut Butter (Арахисовое масло)',
  'Pear (Груша)',
  'Pear Candy (Грушевые конфеты)',
  'Pecan (Орех Пекан)',
  'Peppermint (Перечная мята)',
  'Pie Crust (Корочка пирога)',
  'Pina Colada (Пина Колада)',
  'Pineapple (Ананас)',
  'Pistachio (Фисташки)',
  'Plum (Слива)',
  'Pomegranate (Гранат)',
  'Pomegranate Deluxe (Гранат (делюкс))',
  'Popcorn (Попкорн)',
  'Quince (Айва)',
  'Rainbow Drops (Скиттлс)',
  'Raisin (Изюм)',
  'Raspberry (Малина)',
  'Raspberry (Sweet) (Сладкая малина)',
  'Red Licorice (Красная лакрица)',
  'Red Type II Blend (Ред тайп (табак))',
  'Rice Crunchies (Рисовые хлопья)',
  'Ripe Banana (Спелый банан)',
  'Root beer flavor (pg) (Рутбир)',
  'Root Beer Float (Рутбир Float)',
  'RY4 Double (RY4 (Табак (двойной)))',
  'RY4 Type (RY4 (Табак))',
  'Slim Mint Cookie (Мятное печенье)',
  'Smooth (Smooth)',
  'Sour (Кислый)',
  'Spearmint (Мята колосистая)',
  'Strawberries and Cream (Клубника со сливками)',
  'Strawberry (Клубника)',
  'Strawberry (Ripe) (Спелая клубника)',
  'Swedish Gummy (Шведский гамми)',
  'Sweet and Tart (Кофеты Sweet Tart (Холодок))',
  'Sweet Cream (Сладкий крем)',
  'Sweet Tea (Сладкий чай)',
  'Sweetener (Подсластитель)',
  'Tiramisu (Тирамису)',
  'Toasted Almond (Жаренный миндаль)',
  'Toasted Marshmallow (Поджареный зефир)',
  'Tutti-Frutti (Тутти-фрутти)',
  'Vanilla (Bourbon) (Ваниль бурбон)',
  'Vanilla Bean Gelato (Ванильный заварной крем)',
  'Vanilla Bean Ice Cream (Ванильное мороженное)',
  'Vanilla Cupcake (Ванильный пирог)',
  'Vanilla Custard (Ванильный кастард)',
  'Vanilla Swirl (Ванильный рожок)',
  'Vanillin 10 (PG) (Ванилин)',
  'Waffle (Вафли)',
  'Waffle (Belgian) (Бельгийские вафли)',
  'Watermelon (Арбуз)',
  'Watermelon Candy (Арбузные леденцы)',
  'Western (Вестерн)',
  'Whipped Cream (Взбитые сливки)',
  'White Chocolate (Белый шоколад)',
  'Wintergreen (Мятные кофеты)',
  'Yam (Ямс)'
];


class ListAromsMolecule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }
  componentWillMount = () => {
    this.setState({
      items: aromsList,
    })
  }
filter(e) {
  this.setState({
    filter: e.target.value,
  }) 
}
  
  render() {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter(item => item.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} className={'ant-input ant-select-search__field'} placeholder="Введите название ароматизатора" style={{ width: "100%" }}/>
        <div style={{ height: '16px' }}></div>
        {items.map(item => <Arom key={item.arom} arom={item}/>  )}
      </div>
    )
  }
}

const Arom = (props) => <div className={'ant-select-dropdown-menu-item'} >{props.arom}</div>
  
class AromsModalMolecule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedAroms: [{}],
      selected: false,
    }
    this.selectArom = this.selectArom.bind(this);
  }
  setModalVisible(modalVisible) {
    this.setState({
      modalVisible 
    });
  }
  selectArom(event) {
    this.setState({ 
      selectedAroms: event.target,
    })
    this.selected ? event.target.className = 'ant-select-dropdown-menu-item' : event.target.className = 'selected-arom';
    this.selected = !this.selected;
  }
  render() {
    return (
      <div>

        <Button
          type="dashed"
          size="large"
          icon="plus"
          onClick={() => this.setModalVisible(true)}>Добавить ароматизаторы</Button>

        <Modal
          cancelText="Отмена"
          okText="Добавить"
          title="Ароматизаторы"
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          onOk={() => {this.setModalVisible(false);}}
          onCancel={() => this.setModalVisible(false)}>
          
          <ListAromsMolecule selectedAroms={this.state.selectedAroms} selectArom={this.selectArom} aromsList={aromsList} selected={this.selected}/>

        </Modal >
      </div>
    );
  }
}

export default AromsModalMolecule;