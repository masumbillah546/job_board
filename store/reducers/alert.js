import { createSlice } from '@reduxjs/toolkit';

export const alert = createSlice({
  name: 'alert',
  initialState: {
    show: false,
    success: false,
    message: 'Something went wrong.',
    title: 'Oops!'
  },
  reducers: {
    setAlert: (state, { payload }) => ({
      ...state,
      ...payload,
      message: payload.message || '',
      title: payload.title || 'Oops!'
    }),
  },
});

export const { setAlert } = alert.actions;
export default alert.reducer;
