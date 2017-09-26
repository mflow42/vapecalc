export const BASE_NICOTINE_SLIDER_CHANGE_VALUE = 'BASE_NICOTINE_SLIDER_CHANGE_VALUE';
export const BASE_PG_VG_SLIDER_CHANGE_VALUE = 'BASE_PG_VG_SLIDER_CHANGE_VALUE';
export const DESIRED_NICOTINE_SLIDER_CHANGE_VALUE = 'DESIRED_NICOTINE_SLIDER_CHANGE_VALUE';
export const DESIRED_PG_VG_SLIDER_CHANGE_VALUE = 'DESIRED_PG_VG_SLIDER_CHANGE_VALUE';
export const DESIRED_MIX_VOLUME_CHANGE_VALUE = 'DESIRED_MIX_VOLUME_CHANGE_VALUE';
export const AROM_ADD_TO_CALCULATOR = 'AROM_ADD_TO_CALCULATOR';
export const AROM_CHANGE_CALCULATOR_VALUE = 'AROM_CHANGE_CALCULATOR_VALUE';
export const AROM_REMOVE_FROM_CALCULATOR = 'AROM_REMOVE_FROM_CALCULATOR';


export const baseNicotineSliderChangeValue = (value) => ({
  type: BASE_NICOTINE_SLIDER_CHANGE_VALUE,
  value,
})

export const basePgVgSliderChangeValue = (value) => ({
  type: BASE_PG_VG_SLIDER_CHANGE_VALUE,
  value,
})

export const desiredNicotineSliderChangeValue = (value) => ({
  type: DESIRED_NICOTINE_SLIDER_CHANGE_VALUE,
  value,
})

export const desiredPgVgSliderChangeValue = (value) => ({
  type: DESIRED_PG_VG_SLIDER_CHANGE_VALUE,
  value,
})

export const desiredMixVolumeChangeValue = (value) => ({
  type: DESIRED_MIX_VOLUME_CHANGE_VALUE,
  value,
})


export const aromAddToCalculator = (name, value) => ({
  type: AROM_ADD_TO_CALCULATOR,
  name,
  value,
})

export const aromChangeCalculatorValue= (name, value) => ({
  type: AROM_CHANGE_CALCULATOR_VALUE,
  name,
  value,
})

export const aromRemoveFromCalculator= (name, value) => ({
  type: AROM_REMOVE_FROM_CALCULATOR,
  name,
  value,
})