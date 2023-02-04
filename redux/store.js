import {createStore} from 'redux';

import priceReducer from "./reducer";

// Passing burgerReducer to createStore
const store = createStore(priceReducer);

export default store;
