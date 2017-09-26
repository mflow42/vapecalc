import {
  BASE_NICOTINE_SLIDER_CHANGE_VALUE,
  BASE_PG_VG_SLIDER_CHANGE_VALUE,
  DESIRED_NICOTINE_SLIDER_CHANGE_VALUE,
  DESIRED_PG_VG_SLIDER_CHANGE_VALUE,
  DESIRED_MIX_VOLUME_CHANGE_VALUE,
  AROM_ADD_TO_CALCULATOR,
  AROM_CHANGE_CALC_VALUE
} from '../actions/calculator';


const initState = {
  baseNicotineStrength: 100,
  basePgPercent: 100,
  baseVgPercent: 0,
  desiredNicotineStrength: 3,
  desiredPgPercent: 30,
  desiredVgPercent: 70,
  desiredMixVolume: 30,
  // aroms: [],
}

export default (state = initState, action) => {
  switch (action.type) {

    case BASE_NICOTINE_SLIDER_CHANGE_VALUE:
      return { ...state, baseNicotineStrength: action.value }

    case BASE_PG_VG_SLIDER_CHANGE_VALUE:
      return { ...state, basePgPercent: action.value, baseVgPercent: 100 - action.value }

    case DESIRED_NICOTINE_SLIDER_CHANGE_VALUE:
      return { ...state, desiredNicotineStrength: action.value }

    case DESIRED_PG_VG_SLIDER_CHANGE_VALUE:
      return { ...state, desiredPgPercent: action.value, desiredVgPercent: 100 - action.value }

    case DESIRED_MIX_VOLUME_CHANGE_VALUE:
      return { ...state, desiredMixVolume: action.value }

    // case AROM_ADD_TO_CALCULATOR:
    //   if (state.aroms.some((arom) => {
    //     return arom.name === action.name;
    //   })) return { ...state };
    //   return {
    //     ...state,
    //     aroms: state.aroms.concat({
    //       name: action.name,
    //       value: 0
    //     })
    //   }
    //   return { ...state };

    // case AROM_CHANGE_CALC_VALUE:
    //   console.log(state.aroms)
    //   return state.aroms.map((arom) => {
    //     if (arom.name === action.name) {
    //       return ({
    //         ...state,
    //         aroms: { name: action.name, value: action.value }
    //       })
    //     }
    //     return { ...arom };
    //   })
    default:
      return { ...state };
  }
}
