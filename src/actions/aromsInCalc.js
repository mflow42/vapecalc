export const AROM_ADD = 'AROM_ADD';
export const AROM_CHANGE_VALUE = 'AROM_CHANGE_VALUE';
export const AROM_REMOVE = 'AROM_REMOVE';

export const aromAdd = (id, name, index) => ({
  type: AROM_ADD,
  id,
  name,
  value: 0,
  index
})

export const aromRemove = (id, index) => ({
  type: AROM_REMOVE,
  id,
  index,
})

export const aromChangeValue = (id, value) => ({
  type: AROM_CHANGE_VALUE,
  id,
  value,
})

