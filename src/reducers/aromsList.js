import { AROM_TOGGLE_SELECTION } from '../actions/aromsList';
import { aromsListTpa, aromsListCapella, aromsListFlavourArt } from '../components/01_Atoms/aromsList'

const initState = [];
initState.aromsListTpa = aromsListTpa;
initState.aromsListCapella = aromsListCapella;
initState.aromsListFlavourArt = aromsListFlavourArt;

export default (state = initState, action) => {
  switch (action.type) {
    case AROM_TOGGLE_SELECTION:
      state.
    
    return state;
    
    default:
    return state;
  }
}