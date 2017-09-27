export const AROM_ADD = 'AROM_ADD';
export const AROM_CHANGE_VALUE = 'AROM_CHANGE_VALUE';
export const AROM_REMOVE = 'AROM_REMOVE';

export const aromAdd = (id, name, index) => {
  return {
    type: AROM_ADD,
    id,
    name,
    value: 0,
    index
  }
}

export const aromRemove = (name, index, key) => ({
  type: AROM_REMOVE,
  index,
  name,
  key
})

export const aromChangeValue = (name, value) => ({
  type: AROM_CHANGE_VALUE,
  name,
  value,
})

