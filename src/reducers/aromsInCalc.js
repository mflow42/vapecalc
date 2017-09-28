import { AROM_ADD, AROM_REMOVE, AROM_CHANGE_VALUE } from '../actions/aromsInCalc';

const initState = [];

export default (state = initState, action) => {
  switch (action.type) {

    case AROM_ADD:
      if (state.some((arom) => {
        return arom.id === action.id;
      }))
        return [...state];
      return [
        ...state, {
          id: action.id,
          name: action.name,
          value: action.value,
          index: action.index,
        }
      ]

    case AROM_REMOVE:
      return state.filter(arom => arom.id !== action.id)

    case AROM_CHANGE_VALUE:
      return state.map((arom) => {
        if (arom.id === action.id) {
          return {
            ...arom,
            value: action.value
          }
        }
        return arom;
      })

    default:
      return state;
  }
}
