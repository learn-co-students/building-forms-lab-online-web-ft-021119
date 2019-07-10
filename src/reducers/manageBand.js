export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type){
    case "CREATE_BAND":
      return {bands: [...state.bands, action.data]}
    default:
      return state
  }
};
