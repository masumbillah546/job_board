import { createSlice } from '@reduxjs/toolkit'

const INIT_STATE = {
  user:  false, // default is false, (|| true) should be changed to false
  token: null,
  user_type_id: null,
  data: {},
}

export const auth = createSlice({
  name: 'auth',
  initialState: INIT_STATE,
  reducers: {
    userSignIn: (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      data: payload.data,
      user_type_id: payload.user_type_id,
    }),
    userSignOut: (state) => ({
      ...state,
      user: false,
      token: null,
      user_type_id: null,
      data: {},
    }),
    userData: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
  },
})

export const { userSignIn, userSignOut, userData } = auth.actions
export default auth.reducer
