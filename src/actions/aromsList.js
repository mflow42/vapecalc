export const AROM_TOGGLE_SELECTION = 'AROM_TOGGLE_SELECTION';
export const AROM_LIST_FILTER_CHANGE_VALUE = 'AROM_LIST_FILTER_CHANGE_VALUE';

export const aromToggleSelection = (id, index) => ({
  type: AROM_TOGGLE_SELECTION,
  id,
  index
});

export const aromListFilterChangeValue = (event) => ({
  type: AROM_LIST_FILTER_CHANGE_VALUE,
  value: event.target.value,
});
