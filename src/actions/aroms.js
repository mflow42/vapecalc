export const aromAdd = (name) => ({
  type: 'AROM_ADD',
  name: name,
  value: 0,
})

export const aromChangeValue = (name, value) => ({
  type: 'AROM_CHANGE_VALUE',
  name: name,
  value: value,
})