export const BASE_NICOTINE_SLIDER_CHANGE_VALUE = 'BASE_NICOTINE_SLIDER_CHANGE_VALUE';
export const BASE_PG_VG_SLIDER_CHANGE_VALUE = 'BASE_PG_VG_SLIDER_CHANGE_VALUE';
export const DESIRED_NICOTINE_SLIDER_CHANGE_VALUE = 'DESIRED_NICOTINE_SLIDER_CHANGE_VALUE';
export const DESIRED_PG_VG_SLIDER_CHANGE_VALUE = 'DESIRED_PG_VG_SLIDER_CHANGE_VALUE';
export const DESIRED_MIX_VOLUME_CHANGE_VALUE = 'DESIRED_MIX_VOLUME_CHANGE_VALUE';


export const baseNicotineSliderChangeValue = (value) => ({
  type: BASE_NICOTINE_SLIDER_CHANGE_VALUE,
  value: value,
})

export const basePgVgSliderChangeValue = (value) => ({
  type: BASE_PG_VG_SLIDER_CHANGE_VALUE,
  value: value,
})

export const desiredNicotineSliderChangeValue = (value) => ({
  type: DESIRED_NICOTINE_SLIDER_CHANGE_VALUE,
  value: value,
})

export const desiredPgVgSliderChangeValue = (value) => ({
  type: DESIRED_PG_VG_SLIDER_CHANGE_VALUE,
  value: value,
})

export const desiredMixVolumeChangeValue = (value) => ({
  type: DESIRED_MIX_VOLUME_CHANGE_VALUE,
  value: value,
})
