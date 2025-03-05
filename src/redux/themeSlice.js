import { createSlice} from "@reduxjs/toolkit";
import { colors } from "../utils/colors";

const initialState = { 
    theme: 'White',
    backgroundColor: colors.white,
    textColor: colors.black,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      setTheme: (state, action) => {
        state.theme = action.payload.theme;
        state.backgroundColor = action.payload.backgroundColor;
        state.textColor = action.payload.textColor;
      },
    },
  });
  
  export const { setTheme } = themeSlice.actions;
  export default themeSlice.reducer;