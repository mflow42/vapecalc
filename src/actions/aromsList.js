export const AROM_TOGGLE_SELECTION = 'AROM_TOGGLE_SELECTION';

export const aromToggleSelection = (id, name, index) => {
  return {
    type: AROM_TOGGLE_SELECTION,
    id,
    name,
    index
  }
};
