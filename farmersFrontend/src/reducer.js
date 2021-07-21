export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.product_price + amount, 0);
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const index2 = state.basket.findIndex(
        (basketItem) => basketItem.product_id === action.item.product_id
      );
      let newBasket2 = [...state.basket];
      if (index2 >= 0) {
        alert(
          `You can not add this product ${action.item.product_name} it is already in your cart `
        );
      } else {
        newBasket2.push(action.item);
      }
      return {
        ...state,
        basket: newBasket2,
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.product_id === action.product_id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id}) as its not in basket!`
        );
      }
      console.log(index);
      return {
        ...state,
        basket: newBasket,
      };
    case "CLEAR_CART":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
