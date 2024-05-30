import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: JSON.parse(localStorage.getItem("lughatamiDark")) || false,
  openNav: false,
};

const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    toggleDark(state) {
      state.dark = !state.dark;
      localStorage.setItem("lughatamiDark", JSON.stringify(state.dark));
    },
    removeDark(state) {
      state.dark = false;
      localStorage.setItem("lughatamiDark", JSON.stringify(state.dark));
    },
    toggleOpenNav(state) {
      state.openNav = !state.openNav;
    },
    removeOpenNav(state) {
      state.openNav = false;
    },
  },
});

export const { toggleDark, removeDark, toggleOpenNav, removeOpenNav } = basicSlice.actions;
export default basicSlice.reducer;
