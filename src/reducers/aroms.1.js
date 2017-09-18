const initState = {
  baseNicotineStrength: 100,
  basePgPercent: 100,
  baseVgPercent: 0,
  aromsPercent: 10,
  desiredNicotineStrength: 3,
  desiredPgPercent: 30,
  desiredVgPercent: 70,
  desiredVolume: 30,
  aromsToMix: [
    {id: 'Caramel (Карамель)', name: 'Caramel (Карамель)', isSelected: false },
    {id: 'Cinnamon Sugar Cookie (Печенье с корицей)', name: 'Cinnamon Sugar Cookie (Печенье с корицей)', isSelected: false },
    {id: 'Dairy/Milk (Молоко)', name: 'Dairy/Milk (Молоко)', isSelected: false },
  ]
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'AROM_ADD':
      return {...state, aroms: state.aromsToMix.concat({id: 'Butterscotch (Ирис)', name: 'Butterscotch (Ирис)', isSelected: false })}  
    default:
      return state;
  }
}