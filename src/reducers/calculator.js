import {
  BASE_NICOTINE_SLIDER_CHANGE_VALUE,
  BASE_PG_VG_SLIDER_CHANGE_VALUE,
  DESIRED_NICOTINE_SLIDER_CHANGE_VALUE,
  DESIRED_PG_VG_SLIDER_CHANGE_VALUE,
  DESIRED_MIX_VOLUME_CHANGE_VALUE,
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

    default:
      return {
        ...state
      };
  }
}
