import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isValidToken: false,
		posts: [],
  },
  reducers: {
    setIsValidToken: (state, action) => {
      state.isValidToken = action.payload;
    },
		setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
})

export const { setIsValidToken, setPosts, addPost } = modalSlice.actions

export default modalSlice.reducer