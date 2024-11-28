import { createSlice } from '@reduxjs/toolkit';

export const loader = createSlice({
  name: 'loader',
  initialState: {
    common: false,
  },
  reducers: {
    setLoading: (state, { payload }) => ({
      ...state,
      [payload.key]: payload.value,
    }),
  },
});

export const { setLoading } = loader.actions;
export default loader.reducer;
