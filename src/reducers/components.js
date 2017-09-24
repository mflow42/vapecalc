import { ADD_AROM_TO_COMPONENT } from '../actions/component';

const COEFFICIENT_DROP = 33;
const COEFFICIENT_GRAMM = 1.04;

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
    ml: (props) => ((props.calculator.desiredMixVolume * props.calculator.desiredPgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.basePgPercent / 100) - (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100))),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "VG",
    ml: (props) => ((props.calculator.desiredMixVolume * props.calculator.desiredVgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.baseVgPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }, {
    name: "Итого",
    ml: (props) => (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength)) + (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100)) + ((props.calculator.desiredMixVolume * props.calculator.desiredPgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.basePgPercent / 100) - (props.calculator.desiredMixVolume * (props.calculator.aromsPercent / 100))) + ((props.calculator.desiredMixVolume * props.calculator.desiredVgPercent / 100) - (props.calculator.desiredMixVolume / (props.calculator.baseNicotineStrength / props.calculator.desiredNicotineStrength) * props.calculator.baseVgPercent / 100)),
    kd: COEFFICIENT_DROP,
    kg: COEFFICIENT_GRAMM
  }
];


export default (state = initState, action) => {
  switch (action.type) {
    case ADD_AROM_TO_COMPONENT:
      return [
        ...state,
        {
          name: action.name,
          ml: (props) => {
            // props.aroms.forEach((arom) => {
            //   if (component.name === arom.name)
            //     console.log(arom.value);
            // }, this);
            (props.calculator.desiredMixVolume / (props.aroms[0].value / 100))
          },
          kd: COEFFICIENT_DROP,
          kg: COEFFICIENT_GRAMM
        }
      ]
    default:
      return [...state];
  }
}
