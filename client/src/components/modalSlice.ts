import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isValidToken: false,
  },
  reducers: {
    setIsValidToken: (state, action) => {
      state.isValidToken = action.payload;
    },
  },
})

export const { setIsValidToken } = modalSlice.actions

export default modalSlice.reducer