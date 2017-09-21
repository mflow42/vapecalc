import {NICOTINE_BASE_SLIDER_CHANGE_VALUE, NICOTINE_DESIRED_SLIDER_CHANGE_VALUE, PG_VG_BASE_SLIDER_CHANGE_VALUE, PG_VG_DESIRED_SLIDER_CHANGE_VALUE, MIX_VOLUME_DESIRED} from '../actions/calculator';

const initState = {
  baseNicotineStrength: 100,
  basePgPercent: 100,
  baseVgPercent: 0,
  aromsPercent: 10,
  desiredNicotineStrength: 3,
  desiredPgPercent: 30,
  desiredVgPercent: 70,
  desiredVolume: 30
}

export default (state = initState, action) => {
  switch (action.type) {
    case NICOTINE_BASE_SLIDER_CHANGE_VALUE:
      return () => {
        state.baseNicotineStrength = action.value
      }
    default:
      return state;
  }
}
