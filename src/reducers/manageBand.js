export default function manageBand(state = {
  bands: [],
  }, action) {
  switch(action.type){
    case 'ADD_BAND':
      // const newState = [...state, action.band]
      // return newState;
      return { bands: state.bands.concat({name: action.payload.name}) }; 

    default:
      return state
  }
};
