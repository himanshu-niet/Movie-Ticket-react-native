import {INCREASE_PRICE,DECREASE_PRICE,RESET} from './actionType';
  
  
  
export const increaseAction=(parameter)=>{
    return{
        type:INCREASE_PRICE,
        payload:parameter
    }
}
  
export const decreaseAction = (parameter) => {
  return {
    type: DECREASE_PRICE,
    payload: parameter,
  };
};

export const resetAction = () => {
  return {
    type: RESET,
  };
};