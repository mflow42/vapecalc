export const AROM_ADD = 'AROM_ADD';
export const AROM_CHANGE_VALUE = 'AROM_CHANGE_VALUE';
export const AROM_DELETE = 'AROM_DELETE';

export const aromAdd = (name) => ({
  type: AROM_ADD,
  name: name,
  value: 0,
})

export const aromDelete = (name, index) => ({
  type: AROM_DELETE,
  name: name,
  index: index,
})

export const aromChangeValue = (name, value) => ({
  type: AROM_CHANGE_VALUE,
  name: name,
  value: value,
})
