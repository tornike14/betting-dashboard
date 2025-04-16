import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BettingState } from "../../types/store/bettingSliceT";
import { BettingCard } from "../../types/components/common/bettingCardT";

const initialState: BettingState = {
  cards: [],
};

const bettingSlice = createSlice({
  name: "betting",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<BettingCard>) {
      state.cards.push(action.payload);
    },
    setCards(state, action: PayloadAction<BettingCard[]>) {
      state.cards = action.payload;
    },
  },
});

export const { addCard, setCards } = bettingSlice.actions;
export default bettingSlice.reducer;
