export const AROM_ADD_TO_COMPONENT = 'AROM_ADD_TO_COMPONENT';
export const AROM_TO_COMPONENT_CHANGE_VALUE = 'AROM_TO_COMPONENT_CHANGE_VALUE';

export const aromAddToComponent = (name, value) => ({
  type: AROM_ADD_TO_COMPONENT,
  name,
  value
})