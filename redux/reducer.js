import { INCREASE_PRICE, DECREASE_PRICE ,RESET} from "./actionType";

//initializing state
const initialState = {
  price: 0,
  seats:0,
 
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_PRICE:
      return {
        ...state,
        price: state.price + action.payload,
        seats: state.seats + 1,
      };
    case DECREASE_PRICE:
      return {
        ...state,
        price: state.price - action.payload,
        seats: state.seats - 1,
      };

    case RESET:
      return {
        price: 0,
        seats: 0,
      };

    default:
      return state;
  }
};

export default priceReducer;
