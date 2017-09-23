import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aromAdd } from '../../actions/aroms'
import { Modal, Button, } from 'antd';
import '../02_Molecules/AromsModalMolecule.css';

const aromsList = [
  {id: 'Absinthe (Абсент)', name: 'Absinthe (Абсент)', isSelected: false },
  {id: 'Acai (Ягода асаи)', name: 'Acai (Ягода асаи)', isSelected: false },
  {id: 'Acetyl Pyrazine (Ацетил пиразин)', name: 'Acetyl Pyrazine (Ацетил пиразин)', isSelected: false },
  {id: 'Almond (Миндаль)', name: 'Almond (Миндаль)', isSelected: false },
  {id: 'Apple (Яблоко)', name: 'Apple (Яблоко)', isSelected: false },
  {id: 'Apple (tart granny smith) (Яблоко (Гренни Смит))', name: 'Apple (tart granny smith) (Яблоко (Гренни Смит))', isSelected: false },
  {id: 'Apple Candy (Яблочный мармелад)', name: 'Apple Candy (Яблочный мармелад)', isSelected: false },
  {id: 'Apple Pie (Яблочный пирог)', name: 'Apple Pie (Яблочный пирог)', isSelected: false },
  {id: 'Apricot (Абрикос)', name: 'Apricot (Абрикос)', isSelected: false },
  {id: 'Banana (Банан)', name: 'Banana (Банан)', isSelected: false },
  {id: 'Banana Cream (Банановый крем)', name: 'Banana Cream (Банановый крем)', isSelected: false },
  {id: 'Banana Nut Bread (Банановый хлеб)', name: 'Banana Nut Bread (Банановый хлеб)', isSelected: false },
  {id: 'Bananas Foster (Банановый фостер)', name: 'Bananas Foster (Банановый фостер)', isSelected: false },
  {id: 'Bavarian Cream (Баварский крем)', name: 'Bavarian Cream (Баварский крем)', isSelected: false },
  {id: 'Berry Crunch (Ягодные хлопья)', name: 'Berry Crunch (Ягодные хлопья)', isSelected: false },
  {id: 'Bitter Nut Extra (Горький орех)', name: 'Bitter Nut Extra (Горький орех)', isSelected: false },
  {id: 'Bittersweet Chocolate (Биттерсвит шоколад)', name: 'Bittersweet Chocolate (Биттерсвит шоколад)', isSelected: false },
  {id: 'Black Cherry (Черешня)', name: 'Black Cherry (Черешня)', isSelected: false },
  {id: 'Black Currant (Черная смородина)', name: 'Black Currant (Черная смородина)', isSelected: false },
  {id: 'Black Honey (Черный мед и табак)', name: 'Black Honey (Черный мед и табак)', isSelected: false },
  {id: 'Black Tea (Черный чай)', name: 'Black Tea (Черный чай)', isSelected: false },
  {id: 'Blackberry (Ежевика)', name: 'Blackberry (Ежевика)', isSelected: false },
  {id: 'Blue Raspberry (Голубая малина)', name: 'Blue Raspberry (Голубая малина)', isSelected: false },
  {id: 'Blueberry (Extra) (Черника)', name: 'Blueberry (Extra) (Черника)', isSelected: false },
  {id: 'Blueberry Candy (Черничные леденцы)', name: 'Blueberry Candy (Черничные леденцы)', isSelected: false },
  {id: 'Blueberry Wild (Дикая черника)', name: 'Blueberry Wild (Дикая черника)', isSelected: false },
  {id: 'Boysenberry (Шелковица )', name: 'Boysenberry (Шелковица )', isSelected: false },
  {id: 'Brandy (Бренди)', name: 'Brandy (Бренди)', isSelected: false },
  {id: 'Brown Sugar (Коричневый сахар)', name: 'Brown Sugar (Коричневый сахар)', isSelected: false },
  {id: 'Bubblegum (Жвачка)', name: 'Bubblegum (Жвачка)', isSelected: false },
  {id: 'Bubblegum (Fruity) (Жвачка (Фруктовая))', name: 'Bubblegum (Fruity) (Жвачка (Фруктовая))', isSelected: false },
  {id: 'Butter (Масло)', name: 'Butter (Масло)', isSelected: false },
  {id: 'Butterscotch (Ирис)', name: 'Butterscotch (Ирис)', isSelected: false },
  {id: 'Cantaloupe (Канталупа)', name: 'Cantaloupe (Канталупа)', isSelected: false },
  {id: 'Cappucсino (Каппучино)', name: 'Cappucсino (Каппучино)', isSelected: false },
  {id: 'Caramel (Карамель)', name: 'Caramel (Карамель)', isSelected: false },
  {id: 'Caramel (Original) (Карамель (Оригинальная))', name: 'Caramel (Original) (Карамель (Оригинальная))', isSelected: false },
  {id: 'Caramel Candy (Карамельная конфета)', name: 'Caramel Candy (Карамельная конфета)', isSelected: false },
  {id: 'Caramel Cappuccino (Карамель-каппучино)', name: 'Caramel Cappuccino (Карамель-каппучино)', isSelected: false },
  {id: 'Chai Tea (Чай)', name: 'Chai Tea (Чай)', isSelected: false },
  {id: 'Champagne (Шампанское)', name: 'Champagne (Шампанское)', isSelected: false },
  {id: 'Cheesecake (Чизкейк)', name: 'Cheesecake (Чизкейк)', isSelected: false },
  {id: 'Cheesecake (Graham Crust) (Чизкейк (корочка))', name: 'Cheesecake (Graham Crust) (Чизкейк (корочка))', isSelected: false },
  {id: 'Cherry Blossom (Цветущая вишня)', name: 'Cherry Blossom (Цветущая вишня)', isSelected: false },
  {id: 'Cherry Extract (Экстракт вишни)', name: 'Cherry Extract (Экстракт вишни)', isSelected: false },
  {id: 'Chocolate (Шоколад)', name: 'Chocolate (Шоколад)', isSelected: false },
  {id: 'Cinnamon (Корица)', name: 'Cinnamon (Корица)', isSelected: false },
  {id: 'Cinnamon Danish (Корица датская)', name: 'Cinnamon Danish (Корица датская)', isSelected: false },
  {id: 'Cinnamon Red Hot (Корица)', name: 'Cinnamon Red Hot (Корица)', isSelected: false },
  {id: 'Cinnamon Spice (Острая корица)', name: 'Cinnamon Spice (Острая корица)', isSelected: false },
  {id: 'Cinnamon Sugar Cookie (Печенье с корицей)', name: 'Cinnamon Sugar Cookie (Печенье с корицей)', isSelected: false },
  {id: 'Citrus Punch (Цитрусовый пунш)', name: 'Citrus Punch (Цитрусовый пунш)', isSelected: false },
  {id: 'Clove (Гвоздика)', name: 'Clove (Гвоздика)', isSelected: false },
  {id: 'Cocoa Rounds (Шоколадные шарики)', name: 'Cocoa Rounds (Шоколадные шарики)', isSelected: false },
  {id: 'Coconut (Кокос)', name: 'Coconut (Кокос)', isSelected: false },
  {id: 'Coconut (Extra) (Кокос (Экстра))', name: 'Coconut (Extra) (Кокос (Экстра))', isSelected: false },
  {id: 'Coconut Candy (Кокосовые конфеты)', name: 'Coconut Candy (Кокосовые конфеты)', isSelected: false },
  {id: 'Coffee (Кофе)', name: 'Coffee (Кофе)', isSelected: false },
  {id: 'Cotton Candy (Сладкая вата)', name: 'Cotton Candy (Сладкая вата)', isSelected: false },
  {id: 'Cranberry (Клюква)', name: 'Cranberry (Клюква)', isSelected: false },
  {id: 'Cream Soda (Крем-сода)', name: 'Cream Soda (Крем-сода)', isSelected: false },
  {id: 'Creme de Menthe (Сладкий мятный ликер)', name: 'Creme de Menthe (Сладкий мятный ликер)', isSelected: false },
  {id: 'Cucumber (Огурец)', name: 'Cucumber (Огурец)', isSelected: false },
  {id: 'Dairy/Milk (Молоко)', name: 'Dairy/Milk (Молоко)', isSelected: false },
  {id: 'DK Tobacco Base (Табак)', name: 'DK Tobacco Base (Табак)', isSelected: false },
  {id: 'Double Chocolate (Clear) (Двойной шоколад)', name: 'Double Chocolate (Clear) (Двойной шоколад)', isSelected: false },
  {id: 'Double Chocolate (Dark) (Двойной шоколад (Темный))', name: 'Double Chocolate (Dark) (Двойной шоколад (Темный))', isSelected: false },
  {id: 'Dragonfruit (Драгонфрут (питайя))', name: 'Dragonfruit (Драгонфрут (питайя))', isSelected: false },
  {id: 'Dulce de Leche (Сгущенное молоко)', name: 'Dulce de Leche (Сгущенное молоко)', isSelected: false },
  {id: 'Earl Grey Tea (Эрл-грей)', name: 'Earl Grey Tea (Эрл-грей)', isSelected: false },
  {id: 'Elderberry (Бузина)', name: 'Elderberry (Бузина)', isSelected: false },
  {id: 'Energy Drink (Энергетический напиток)', name: 'Energy Drink (Энергетический напиток)', isSelected: false },
  {id: 'English Toffee (Тоффи)', name: 'English Toffee (Тоффи)', isSelected: false },
  {id: 'Espresso (Эспрессо)', name: 'Espresso (Эспрессо)', isSelected: false },
  {id: 'Ethyl Maltol (Этил мальтол)', name: 'Ethyl Maltol (Этил мальтол)', isSelected: false },
  {id: 'French Vanilla (Французкая ваниль)', name: 'French Vanilla (Французкая ваниль)', isSelected: false },
  {id: 'French Vanilla Deluxe (Французкая ваниль (Делюкс))', name: 'French Vanilla Deluxe (Французкая ваниль (Делюкс))', isSelected: false },
  {id: 'Frosted Donut (Пончик)', name: 'Frosted Donut (Пончик)', isSelected: false },
  {id: 'Fruit Circles (Фруктовые кольца)', name: 'Fruit Circles (Фруктовые кольца)', isSelected: false },
  {id: 'Fruit Circles With Milk (Фруктовые кольца с молоком)', name: 'Fruit Circles With Milk (Фруктовые кольца с молоком)', isSelected: false },
  {id: 'Fruity Stick Gum (Жвачка (Fruity Stick))', name: 'Fruity Stick Gum (Жвачка (Fruity Stick))', isSelected: false },
  {id: 'Fudge Brownie (Брауни)', name: 'Fudge Brownie (Брауни)', isSelected: false },
  {id: 'Ginger Ale (Имбирный Эль)', name: 'Ginger Ale (Имбирный Эль)', isSelected: false },
  {id: 'Gingerbread (Имбирный пряник)', name: 'Gingerbread (Имбирный пряник)', isSelected: false },
  {id: 'Graham Cracker (Грэхем крекер)', name: 'Graham Cracker (Грэхем крекер)', isSelected: false },
  {id: 'Graham Cracker Clear (Грэхем крекер)', name: 'Graham Cracker Clear (Грэхем крекер)', isSelected: false },
  {id: 'Grape Candy (Виноградные леденцы)', name: 'Grape Candy (Виноградные леденцы)', isSelected: false },
  {id: 'Grape Juice (Виноградный сок)', name: 'Grape Juice (Виноградный сок)', isSelected: false },
  {id: 'Greek Yogurt (Греческий йогурт)', name: 'Greek Yogurt (Греческий йогурт)', isSelected: false },
  {id: 'Green Apple (Зеленое яблоко)', name: 'Green Apple (Зеленое яблоко)', isSelected: false },
  {id: 'Green Tea (Зеленый чай)', name: 'Green Tea (Зеленый чай)', isSelected: false },
  {id: 'Guava (Гуайява)', name: 'Guava (Гуайява)', isSelected: false },
  {id: 'Gummy Candy (Тянучки)', name: 'Gummy Candy (Тянучки)', isSelected: false },
  {id: 'Hazelnut (Лесной орех)', name: 'Hazelnut (Лесной орех)', isSelected: false },
  {id: 'Hibiscus (Гибискус)', name: 'Hibiscus (Гибискус)', isSelected: false },
  {id: 'Honey (Мед)', name: 'Honey (Мед)', isSelected: false },
  {id: 'Honeydew (Медовая дыня)', name: 'Honeydew (Медовая дыня)', isSelected: false },
  {id: 'Honeydew II (Медовая дыня (версия 2))', name: 'Honeydew II (Медовая дыня (версия 2))', isSelected: false },
  {id: 'Honeysuckle (Жимолость)', name: 'Honeysuckle (Жимолость)', isSelected: false },
  {id: 'Horehound (Шандра)', name: 'Horehound (Шандра)', isSelected: false },
  {id: 'Huckleberry (Хаклберри)', name: 'Huckleberry (Хаклберри)', isSelected: false },
  {id: 'Irish Cream (Ирландские сливки)', name: 'Irish Cream (Ирландские сливки)', isSelected: false },
  {id: 'Jackfruit (Джекфрут)', name: 'Jackfruit (Джекфрут)', isSelected: false },
  {id: 'Jamaican Rum (Ямайский ром)', name: 'Jamaican Rum (Ямайский ром)', isSelected: false },
  {id: 'Kalua and Cream (Калуа и сливки)', name: 'Kalua and Cream (Калуа и сливки)', isSelected: false },
  {id: 'Kentucky Bourbon (Бурбон из Кентукки)', name: 'Kentucky Bourbon (Бурбон из Кентукки)', isSelected: false },
  {id: 'Key Lime (Лайм)', name: 'Key Lime (Лайм)', isSelected: false },
  {id: 'Kiwi (Киви)', name: 'Kiwi (Киви)', isSelected: false },
  {id: 'Kiwi (Double) (Киви (двойной))', name: 'Kiwi (Double) (Киви (двойной))', isSelected: false },
  {id: 'Koolada 10 PG (Кулада)', name: 'Koolada 10 PG (Кулада)', isSelected: false },
  {id: 'Lemon (water soluble) (Лимон)', name: 'Lemon (water soluble) (Лимон)', isSelected: false },
  {id: 'Lemon 2 (Лимон (Версия 2))', name: 'Lemon 2 (Лимон (Версия 2))', isSelected: false },
  {id: 'Lemon Lime (Лимон-лайм)', name: 'Lemon Lime (Лимон-лайм)', isSelected: false },
  {id: 'Lemon Lime 2 (Лимон лайм (версия 2))', name: 'Lemon Lime 2 (Лимон лайм (версия 2))', isSelected: false },
  {id: 'Lemonade Cookie (Лимонадное печенье)', name: 'Lemonade Cookie (Лимонадное печенье)', isSelected: false },
  {id: 'Lucky Leprechaun Cereal (Зефирные хлопья)', name: 'Lucky Leprechaun Cereal (Зефирные хлопья)', isSelected: false },
  {id: 'Lychee (Личи)', name: 'Lychee (Личи)', isSelected: false },
  {id: 'M Type Premium (Эм тайп премиум (табак))', name: 'M Type Premium (Эм тайп премиум (табак))', isSelected: false },
  {id: 'Malted milk (Сухое молоко)', name: 'Malted milk (Сухое молоко)', isSelected: false },
  {id: 'Mango (Манго)', name: 'Mango (Манго)', isSelected: false },
  {id: 'Maple Extract (Кленовый экстракт)', name: 'Maple Extract (Кленовый экстракт)', isSelected: false },
  {id: 'Maple Syrup (Кленовый сироп)', name: 'Maple Syrup (Кленовый сироп)', isSelected: false },
  {id: 'Marshmallow (Маршмеллоу)', name: 'Marshmallow (Маршмеллоу)', isSelected: false },
  {id: 'Mary Jane (Мери Джейн)', name: 'Mary Jane (Мери Джейн)', isSelected: false },
  {id: 'Menthol liquid (Ментол)', name: 'Menthol liquid (Ментол)', isSelected: false },
  {id: 'Meringue (Безе)', name: 'Meringue (Безе)', isSelected: false },
  {id: 'Milk Chocolate (Молочный шоколад)', name: 'Milk Chocolate (Молочный шоколад)', isSelected: false },
  {id: 'Mojito Havana (Мохито)', name: 'Mojito Havana (Мохито)', isSelected: false },
  {id: 'Molasses (Меласса)', name: 'Molasses (Меласса)', isSelected: false },
  {id: 'Musk Candy (Конфеты Musk Lifesaver)', name: 'Musk Candy (Конфеты Musk Lifesaver)', isSelected: false },
  {id: 'Nectarine (Нектарин)', name: 'Nectarine (Нектарин)', isSelected: false },
  {id: 'Oatmeal Cookie (Овсянное печенье)', name: 'Oatmeal Cookie (Овсянное печенье)', isSelected: false },
  {id: 'Orange Cream (Апельсиновый крем)', name: 'Orange Cream (Апельсиновый крем)', isSelected: false },
  {id: 'Orange Mandarin (Мандарин)', name: 'Orange Mandarin (Мандарин)', isSelected: false },
  {id: 'Pancake (Панкейк)', name: 'Pancake (Панкейк)', isSelected: false },
  {id: 'Papaya (Папайя)', name: 'Papaya (Папайя)', isSelected: false },
  {id: 'Passion Fruit (Маракуйя)', name: 'Passion Fruit (Маракуйя)', isSelected: false },
  {id: 'Peach (Персик)', name: 'Peach (Персик)', isSelected: false },
  {id: 'Peach (Juicy) (Сок персика)', name: 'Peach (Juicy) (Сок персика)', isSelected: false },
  {id: 'Peanut Butter (Арахисовое масло)', name: 'Peanut Butter (Арахисовое масло)', isSelected: false },
  {id: 'Pear (Груша)', name: 'Pear (Груша)', isSelected: false },
  {id: 'Pear Candy (Грушевые конфеты)', name: 'Pear Candy (Грушевые конфеты)', isSelected: false },
  {id: 'Pecan (Орех Пекан)', name: 'Pecan (Орех Пекан)', isSelected: false },
  {id: 'Peppermint (Перечная мята)', name: 'Peppermint (Перечная мята)', isSelected: false },
  {id: 'Pie Crust (Корочка пирога)', name: 'Pie Crust (Корочка пирога)', isSelected: false },
  {id: 'Pina Colada (Пина Колада)', name: 'Pina Colada (Пина Колада)', isSelected: false },
  {id: 'Pineapple (Ананас)', name: 'Pineapple (Ананас)', isSelected: false },
  {id: 'Pistachio (Фисташки)', name: 'Pistachio (Фисташки)', isSelected: false },
  {id: 'Plum (Слива)', name: 'Plum (Слива)', isSelected: false },
  {id: 'Pomegranate (Гранат)', name: 'Pomegranate (Гранат)', isSelected: false },
  {id: 'Pomegranate Deluxe (Гранат (делюкс))', name: 'Pomegranate Deluxe (Гранат (делюкс))', isSelected: false },
  {id: 'Popcorn (Попкорн)', name: 'Popcorn (Попкорн)', isSelected: false },
  {id: 'Quince (Айва)', name: 'Quince (Айва)', isSelected: false },
  {id: 'Rainbow Drops (Скиттлс)', name: 'Rainbow Drops (Скиттлс)', isSelected: false },
  {id: 'Raisin (Изюм)', name: 'Raisin (Изюм)', isSelected: false },
  {id: 'Raspberry (Малина)', name: 'Raspberry (Малина)', isSelected: false },
  {id: 'Raspberry (Sweet) (Сладкая малина)', name: 'Raspberry (Sweet) (Сладкая малина)', isSelected: false },
  {id: 'Red Licorice (Красная лакрица)', name: 'Red Licorice (Красная лакрица)', isSelected: false },
  {id: 'Red Type II Blend (Ред тайп (табак))', name: 'Red Type II Blend (Ред тайп (табак))', isSelected: false },
  {id: 'Rice Crunchies (Рисовые хлопья)', name: 'Rice Crunchies (Рисовые хлопья)', isSelected: false },
  {id: 'Ripe Banana (Спелый банан)', name: 'Ripe Banana (Спелый банан)', isSelected: false },
  {id: 'Root beer flavor (pg) (Рутбир)', name: 'Root beer flavor (pg) (Рутбир)', isSelected: false },
  {id: 'Root Beer Float (Рутбир Float)', name: 'Root Beer Float (Рутбир Float)', isSelected: false },
  {id: 'RY4 Double (RY4 (Табак (двойной)))', name: 'RY4 Double (RY4 (Табак (двойной)))', isSelected: false },
  {id: 'RY4 Type (RY4 (Табак))', name: 'RY4 Type (RY4 (Табак))', isSelected: false },
  {id: 'Slim Mint Cookie (Мятное печенье)', name: 'Slim Mint Cookie (Мятное печенье)', isSelected: false },
  {id: 'Smooth (Smooth)', name: 'Smooth (Smooth)', isSelected: false },
  {id: 'Sour (Кислый)', name: 'Sour (Кислый)', isSelected: false },
  {id: 'Spearmint (Мята колосистая)', name: 'Spearmint (Мята колосистая)', isSelected: false },
  {id: 'Strawberries and Cream (Клубника со сливками)', name: 'Strawberries and Cream (Клубника со сливками)', isSelected: false },
  {id: 'Strawberry (Клубника)', name: 'Strawberry (Клубника)', isSelected: false },
  {id: 'Strawberry (Ripe) (Спелая клубника)', name: 'Strawberry (Ripe) (Спелая клубника)', isSelected: false },
  {id: 'Swedish Gummy (Шведский гамми)', name: 'Swedish Gummy (Шведский гамми)', isSelected: false },
  {id: 'Sweet and Tart (Кофеты Sweet Tart (Холодок))', name: 'Sweet and Tart (Кофеты Sweet Tart (Холодок))', isSelected: false },
  {id: 'Sweet Cream (Сладкий крем)', name: 'Sweet Cream (Сладкий крем)', isSelected: false },
  {id: 'Sweet Tea (Сладкий чай)', name: 'Sweet Tea (Сладкий чай)', isSelected: false },
  {id: 'Sweetener (Подсластитель)', name: 'Sweetener (Подсластитель)', isSelected: false },
  {id: 'Tiramisu (Тирамису)', name: 'Tiramisu (Тирамису)', isSelected: false },
  {id: 'Toasted Almond (Жаренный миндаль)', name: 'Toasted Almond (Жаренный миндаль)', isSelected: false },
  {id: 'Toasted Marshmallow (Поджареный зефир)', name: 'Toasted Marshmallow (Поджареный зефир)', isSelected: false },
  {id: 'Tutti-Frutti (Тутти-фрутти)', name: 'Tutti-Frutti (Тутти-фрутти)', isSelected: false },
  {id: 'Vanilla (Bourbon) (Ваниль бурбон)', name: 'Vanilla (Bourbon) (Ваниль бурбон)', isSelected: false },
  {id: 'Vanilla Bean Gelato (Ванильный заварной крем)', name: 'Vanilla Bean Gelato (Ванильный заварной крем)', isSelected: false },
  {id: 'Vanilla Bean Ice Cream (Ванильное мороженное)', name: 'Vanilla Bean Ice Cream (Ванильное мороженное)', isSelected: false },
  {id: 'Vanilla Cupcake (Ванильный пирог)', name: 'Vanilla Cupcake (Ванильный пирог)', isSelected: false },
  {id: 'Vanilla Custard (Ванильный кастард)', name: 'Vanilla Custard (Ванильный кастард)', isSelected: false },
  {id: 'Vanilla Swirl (Ванильный рожок)', name: 'Vanilla Swirl (Ванильный рожок)', isSelected: false },
  {id: 'Vanillin 10 (PG) (Ванилин)', name: 'Vanillin 10 (PG) (Ванилин)', isSelected: false },
  {id: 'Waffle (Вафли)', name: 'Waffle (Вафли)', isSelected: false },
  {id: 'Waffle (Belgian) (Бельгийские вафли)', name: 'Waffle (Belgian) (Бельгийские вафли)', isSelected: false },
  {id: 'Watermelon (Арбуз)', name: 'Watermelon (Арбуз)', isSelected: false },
  {id: 'Watermelon Candy (Арбузные леденцы)', name: 'Watermelon Candy (Арбузные леденцы)', isSelected: false },
  {id: 'Western (Вестерн)', name: 'Western (Вестерн)', isSelected: false },
  {id: 'Whipped Cream (Взбитые сливки)', name: 'Whipped Cream (Взбитые сливки)', isSelected: false },
  {id: 'White Chocolate (Белый шоколад)', name: 'White Chocolate (Белый шоколад)', isSelected: false },
  {id: 'Wintergreen (Мятные кофеты)', name: 'Wintergreen (Мятные кофеты)', isSelected: false },
  {id: 'Yam (Ямс)', name: 'Yam (Ямс)', isSelected: false },
]


class ListAromsMoleculeView extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
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
        <input type="text"
          onChange={this.filter}
          className={'ant-input ant-select-search__field'}
          placeholder="Введите название ароматизатора"
          style={{ width: "100%" }}
        />

        <div style={{ height: '16px' }}></div>

        {aromsList.map(item =>
          <button className={'arom'} key={item.id} onClick={() => this.props.aromAdd(item.name)}>{item.name}</button>
        )}
      </div>
    )
  }
}

const ListAromsMolecule = connect(state => ({ aroms: state.aroms }), {aromAdd})(ListAromsMoleculeView)

class AromsModalMolecule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }
  setModalVisible(modalVisible) {
    this.setState({
      modalVisible
    });
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
          onOk={() => { this.setModalVisible(false); }}
          onCancel={() => this.setModalVisible(false)}
        >
          <ListAromsMolecule />
        </Modal >
      </div>
    );
  }
}

export default AromsModalMolecule;
