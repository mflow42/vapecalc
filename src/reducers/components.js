import { AROM_ADD_TO_COMPONENT } from '../actions/component';
import { AROM_TO_COMPONENT_CHANGE_VALUE } from '../actions/component';

const initState = [];

export default (state = initState, action) => {
  switch (action.type) {
    
    case AROM_TO_COMPONENT_CHANGE_VALUE:
    return state.map((arom) => {
      if (arom.name === action.name) {
        return { ...arom, value: action.value }
      }
      return arom;
    })

    case AROM_ADD_TO_COMPONENT:
    // этот перебор для того, чтобы вставить в таблицу выбранные аромки перед строкой с PG
    for (var index = 0; index < state.length; index++) {
      var element = state[index];
      if (element.name === 'PG') {
        // подготавливаем и возвращаем State для таблицы
        return [
          // для этого отрезаем часть до PG от изначального State и вставляем в подготавливаемую часть
          ...state.slice(0, index),
          // вставляем динамический расчет аромки
          {
            name: action.name,
            ml: (props) => {
              for (var key in props.calculator.aroms) {
                if (props.calculator.aroms[key].name === action.name) {
                  return (props.calculator.desiredMixVolume * (props.calculator.aroms[key].value / 100));
                }
              }
            },
            kd: COEFFICIENT_DROP,
            kg: COEFFICIENT_GRAMM,
          },
          // вставляем оставшийся конец State для таблицы
          ...state.slice(index)
        ]
      }
    }
      default:
      return [...state];
  }
}
