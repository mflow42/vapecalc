import { AROM_TOGGLE_SELECTION, FILTER_CHANGE } from '../actions/aromsList';
import { aromsListTpa, aromsListCapella, aromsListFlavourArt } from '../components/01_Atoms/aromsList'

const initState = {
  filter: 'filter',
  aromsListTpa: aromsListTpa,
  aromsListCapella: aromsListCapella,
  aromsListFlavourArt: aromsListFlavourArt
};

export default (state = initState, action) => {
  switch (action.type) {
    case AROM_TOGGLE_SELECTION:
      const aroms = this.state.aroms;
      aroms[action.index].selected = !aroms[action.index].selected;
      return aroms;

    case FILTER_CHANGE:
      return {
        ...state,
        filter: action.value
      }

    default:
      return state;
  }
}