export const AROM_TOGGLE_SELECTION = 'AROM_TOGGLE_SELECTION';
export const FILTER_CHANGE = 'FILTER_CHANGE';

export const aromToggleSelection = (id, index) => ({
  type: AROM_TOGGLE_SELECTION,
  id,
  index
});

export const filterChange = (e) => ({
  type: FILTER_CHANGE,
  value: e.target.value,
});
