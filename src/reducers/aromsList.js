import { AROM_TOGGLE_SELECTION } from '../actions/aromsList';
import { aromsListTpa, aromsListCapella, aromsListFlavourArt } from '../components/01_Atoms/aromsList'

const initState = {
  aromsListTpa: aromsListTpa,
  aromsListCapella: aromsListCapella,
  aromsListFlavourArt: aromsListFlavourArt
};

export default (state = initState, action) => {
  switch (action.type) {
    case AROM_TOGGLE_SELECTION:
      if (action.id > 1000 && action.id < 2000) {
        state.aromsListTpa[action.index].selected = !state.aromsListTpa[action.index].selected;
      } else if (action.id > 2000 && action.id < 3000) {
        state.aromsListCapella[action.index].selected = !state.aromsListCapella[action.index].selected;
      } else if (action.id > 3000 && action.id < 4000) {
        state.aromsListFlavourArt[action.index].selected = !state.aromsListFlavourArt[action.index].selected;
      } else {
        return state
      }
    default:
      return state;
  }
}