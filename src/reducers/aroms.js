import {AROM_ADD, AROM_DELETE, AROM_CHANGE_VALUE} from '../actions/aroms';

const initState = [];

export default (state = initState, action) => {
  switch (action.type) {
    case AROM_ADD:
      if (state.some((arom) => {
        return arom.name === action.name;
      })) 
        return [...state];
      return [
        ...state, {
          name: action.name,
          value: action.value
        }
      ]
    case AROM_DELETE:
      return [
        {
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        }
      ];

    case AROM_CHANGE_VALUE:
      return state.map((arom) => {
        if (arom.name === action.name) {
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
