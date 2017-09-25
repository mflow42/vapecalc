import { ADD_AROM_TO_COMPONENT } from '../actions/component';
import { AROM_TO_COMPONENT_CHANGE_VALUE } from '../actions/component';

const COEFFICIENT_DROP = 33;
const COEFFICIENT_GRAMM = 1.04;
// let start = 0;
// let comp = 4;

const initState = [
  {
    name: "Основы",
    ml: (props) => (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "Ароматизаторов",
    ml: (props) => (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
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
      return [
        ...state,
        {
          name: action.name,
          ml: (props) => {
            let result = 0;
            for (var key in props.calculator.aroms) {
              // console.log(props.calculator.aroms[key].name)
              if (props.calculator.aroms[key].name === action.name) {
                result = action.value
              }
            }
            return result;
          },
            // console.log(action.name)
            // return result;
            // console.log(props.components)
            // console.log(props);
            // props.aroms.forEach((arom) => {
            //   if (component.name === arom.name)
            //     console.log(arom.value);
            // }, this);
            // (props.aroms[0].value)
            // / (props.aroms[0].value / 100)
            // console.log(props.aroms[0].value)
            // for (var key in object) {
            //   if (object.hasOwnProperty(key)) {
            //     var element = object[key];

            //   }
            // }
            // console.log(props.calculator.aromsQuantity)
            // console.log(props.calculator.aromsQuantity)
            // console.log(state)
            // console.log(stateStore.state)
            // console.log(props.aroms[0].value)
            // console.log(props.aroms[props.calculator.aromsQuantity])
            // start++;
            // console.log(props.aroms.length)
            // console.log(this)
            // comp++;
            // let tmp = props.components[comp];
            // let tmp2 = tmp.index;
            // console.log(props.aroms.length)
            // console.log(tmp3.value)
            // console.log(props.components[comp].index)
          kd: COEFFICIENT_DROP,
          kg: COEFFICIENT_GRAMM,
        }
      ]
    default:
      return [...state];
  }
}
