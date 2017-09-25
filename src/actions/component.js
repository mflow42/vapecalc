export const ADD_AROM_TO_COMPONENT = 'ADD_AROM_TO_COMPONENT';
export const AROM_TO_COMPONENT_CHANGE_VALUE = 'AROM_TO_COMPONENT_CHANGE_VALUE';

export const addAromToComponent = (name, value) => ({
  type: ADD_AROM_TO_COMPONENT,
  name,
  value
})