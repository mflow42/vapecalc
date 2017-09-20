export const NICOTINE_BASE_SLIDER_CHANGE_VALUE = 'NICOTINE_BASE_SLIDER_CHANGE_VALUE';
export const NICOTINE_DESIRED_SLIDER_CHANGE_VALUE = 'NICOTINE_DESIRED_SLIDER_CHANGE_VALUE';
export const PG_VG_BASE_SLIDER_CHANGE_VALUE = 'PG_VG_BASE_SLIDER_CHANGE_VALUE';
export const PG_VG_DESIRED_SLIDER_CHANGE_VALUE = 'PG_VG_DESIRED_SLIDER_CHANGE_VALUE';
export const MIX_VOLUME_DESIRED = 'MIX_VOLUME_DESIRED';


export const nicotineBaseSliderChangeValue = (value) => ({
  type: NICOTINE_BASE_SLIDER_CHANGE_VALUE,
  value: value,
})

export const nicotineDesiredSliderChangeValue = (value) => ({
  type: NICOTINE_DESIRED_SLIDER_CHANGE_VALUE,
  value: value,
})

export const pgVgBaseSliderChangeValue = (value) => ({
  type: PG_VG_BASE_SLIDER_CHANGE_VALUE,
  value: value,
})

export const pgVgDesiredSliderChangeValue = (value) => ({
  type: PG_VG_DESIRED_SLIDER_CHANGE_VALUE,
  value: value,
})

export const mixVolumeDesired = (value) => ({
  type: MIX_VOLUME_DESIRED,
  value: value,
})
