import { ADD_AROM_TO_COMPONENT } from '../actions/component';
import { AROM_TO_COMPONENT_CHANGE_VALUE } from '../actions/component';

const COEFFICIENT_DROP = 33;
const COEFFICIENT_GRAMM = 1.04;

const initState = [
  {
    name: "Основы",
    ml: (props) => (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, 
  // Некогда бывшая часть ароматизаторов - в отличие от ноой - не динамиическая - вместо этой части как раз идет вставка кодом ниже
  // {
  //   name: "Ароматизаторов",
  //   ml: (props) => props.calculator.aromsTotal,
  //   // (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100)),
  //   kd: COEFFICIENT_DROP,
  //   kg: COEFFICIENT_GRAMM
  // },
   {
    name: "PG",
    ml: (props) => ((props.calculator.desiredMixVolume * props.calculator.desiredPgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.basePgPercent / 100) - (props.calculator.desiredMixVolume * (props.calculator.aromsTotal / 100))),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "VG",
    ml: (props) => ((props.calculator.desiredMixVolume * props.calculator.desiredVgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.baseVgPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "Итого",
    ml: (props) => (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength)) + (props.calculator.desiredMixVolume * (props.calculator.aromsTotal / 100)) + ((props.calculator.desiredMixVolume * props.calculator.desiredPgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.basePgPercent / 100) - (props.calculator.desiredMixVolume * (props.calculator.aromsTotal / 100))) + ((props.calculator.desiredMixVolume * props.calculator.desiredVgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.baseVgPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }
];

export default (state = initState, action) => {
  switch (action.type) {

    case AROM_TO_COMPONENT_CHANGE_VALUE:
    return state.map((arom) => {
      if (arom.name === action.name) {
        return { ...arom, value: action.value }
      }
      return arom;
    })

    case ADD_AROM_TO_COMPONENT:
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
