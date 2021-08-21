//main logic
export const initialState = {
  basket: [
    
  ],
  user: null,
};
export const getBasketTotal = (basket) =>
  //adding amounts
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return{
        ...state,
        user:action.user
      }
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //clone the basket
      let newBasket = [...state.basket];
      //check if item is in basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //removed from basket
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove product as its not exist");
      }
      //returned updated basket
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;
