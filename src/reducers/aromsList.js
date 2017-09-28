import { AROM_TOGGLE_SELECTION, AROM_LIST_FILTER_CHANGE_VALUE } from '../actions/aromsList';
import { aromsListTpa, aromsListCapella, aromsListFlavourArt } from '../components/01_Atoms/aromsList'

const initState = {
  filter: '',
  aromsListTpa: aromsListTpa,
  aromsListCapella: aromsListCapella,
  aromsListFlavourArt: aromsListFlavourArt
};

export default (state = initState, action) => {
  switch (action.type) {
    case AROM_TOGGLE_SELECTION:
      if (action.id > 1000 && action.id < 2000) {
        for (let key in state.aromsListTpa) {
          if (state.aromsListTpa[key].id === action.id) state.aromsListTpa[key].selected = !state.aromsListTpa[key].selected;
        }
      } else if (action.id > 2000 && action.id < 3000) {
        for (let key in state.aromsListCapella) {
          if (state.aromsListCapella[key].id === action.id) state.aromsListCapella[key].selected = !state.aromsListCapella[key].selected;
        }
      } else if (action.id > 3000 && action.id < 4000) {
        for (let key in state.aromsListFlavourArt) {
          if (state.aromsListFlavourArt[key].id === action.id) state.aromsListFlavourArt[key].selected = !state.aromsListFlavourArt[key].selected;
        }
      } else return state;

    case AROM_LIST_FILTER_CHANGE_VALUE:
      return ({
        ...state,
        filter: action.value
      })

    default:
      return state;
  }
}