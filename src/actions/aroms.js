export const AROM_ADD = 'AROM_ADD';
export const AROM_CHANGE_VALUE = 'AROM_CHANGE_VALUE';
export const AROM_REMOVE = 'AROM_REMOVE';

export const aromAdd = (id, name) => {
  return {
    type: AROM_ADD,
    id,
    name,
    value: 0,
  }
}

export const aromRemove = (name, i, key) => ({
  type: AROM_REMOVE,
  i,
  name,
  key
})

export const aromChangeValue = (name, value) => ({
  type: AROM_CHANGE_VALUE,
  name,
  value,
})

