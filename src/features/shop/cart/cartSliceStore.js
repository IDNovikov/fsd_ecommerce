import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  itemsCount: 0,
  totalPrice: 0,
};

function updateTotals(state) {
  state.count = state.items.reduce((t, i) => t + i.quantity, 0);
  state.itemsCount = state.items.length;
  state.totalPrice = state.items.reduce((t, i) => t + i.price * i.quantity, 0);
}

const cartSliceStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      updateTotals(state);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      updateTotals(state);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity = quantity;
      updateTotals(state);
    },

    clearCart: (state) => {
      state.items = [];
      updateTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSliceStore.actions;
export default cartSliceStore.reducer;
