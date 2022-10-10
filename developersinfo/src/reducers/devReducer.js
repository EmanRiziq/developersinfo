export const actionType = {
    ADD_DEV: 'ADD_DEV' ,
    DELETE_DEV:'DELETE_DEV' }
  
  export const devReducer = (state, action) => {
    switch (action.type) {
      case actionType.ADD_DEV:
        return [...state, {
          name: action.payload.name,
          language: action.payload.language,
          tech: action.payload.tech,
          food: action.payload.food,
          drink: action.payload.drink,
          id: state.length + 1
        }]
        case actionType.DELETE_DEV:
            return state.filter(dev => dev.id !== action.payload.id);
      default:
        return state;
    }
  }