import {
  BASE_NICOTINE_SLIDER_CHANGE_VALUE,
  BASE_PG_VG_SLIDER_CHANGE_VALUE,
  DESIRED_NICOTINE_SLIDER_CHANGE_VALUE,
  DESIRED_PG_VG_SLIDER_CHANGE_VALUE,
  DESIRED_MIX_VOLUME_CHANGE_VALUE,
  AROM_ADD_TO_CALCULATOR,
  AROM_CHANGE_CALCULATOR_VALUE,
  AROM_REMOVE_FROM_CALCULATOR
} from '../actions/calculator';

const initState = {
  baseNicotineStrength: 100,
  basePgPercent: 100,
  baseVgPercent: 0,
  desiredNicotineStrength: 3,
  desiredPgPercent: 30,
  desiredVgPercent: 70,
  desiredMixVolume: 30,
}

export default (state = initState, action) => {
  switch (action.type) {

    case BASE_NICOTINE_SLIDER_CHANGE_VALUE:
      return {
        ...state,
        baseNicotineStrength: action.value
      }

    case BASE_PG_VG_SLIDER_CHANGE_VALUE:
      return {
        ...state,
        basePgPercent: action.value,
        baseVgPercent: 100 - action.value
      }

    case DESIRED_NICOTINE_SLIDER_CHANGE_VALUE:
      return {
        ...state,
        desiredNicotineStrength: action.value
      }

    case DESIRED_PG_VG_SLIDER_CHANGE_VALUE:
      return {
        ...state,
        desiredPgPercent: action.value,
        desiredVgPercent: 100 - action.value
      }

    case DESIRED_MIX_VOLUME_CHANGE_VALUE:
      return {
        ...state,
        desiredMixVolume: action.value
      }

    case AROM_ADD_TO_CALCULATOR:
      if (state.aroms.some((arom) => {
        return arom.name === action.name;
      })) 
        return {
          ...state
        };
      return ({
        ...state,
        aroms: state
          .aroms
          .concat({name: action.name, value: 0})
      })
      return {
        ...state
      };

    case AROM_CHANGE_CALCULATOR_VALUE:
      // изменяем значение процента у слайдера аромки
      for (var key in state['aroms']) {
        if (state['aroms'][key].name === action.name) {
          state['aroms'][key].value = action.value;
        }
      }

      // а теперь складываем и изменяем общий процент аромок в замесе для
      // использования в калькуляторе
      let result = 0;
      for (var key in state['aroms']) {
        result += state['aroms'][key].value;
      }
      state.aromsTotal = result;
      
    default:
      return {
        ...state
      };
  }
}
