import { createSlice } from '@reduxjs/toolkit'
import { PAGINATION_TYPES, TABLE_ROWS_PER_PAGE } from '../../utils/constants'

export const paginateObj = {
  items: [],
  total: 0,
  count: TABLE_ROWS_PER_PAGE,
  rowsPerPage: TABLE_ROWS_PER_PAGE,
  currentPage: 1,
}

const initialState = {}

Object.keys(PAGINATION_TYPES).map(
  (key) => (initialState[PAGINATION_TYPES[key]] = { ...paginateObj }),
)

export const PaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    addPaginationItem: (state, { payload }) => ({
      ...state,
      [payload.key]: {
        ...state[payload.key],
        items: [payload.value, ...state[payload.key].items],
        total: state[payload.key].total + 1,
      },
    }),
    updatePaginationItem: (state, { payload }) => {
      const items = [...state[payload.key].items]
      const currentIndex = items.findIndex(
        (item) => item[payload?.primaryKey || 'id'] == payload.id,
      )
      if (currentIndex === -1) {
        return state
      } else {
        items[currentIndex] = {
          ...items[currentIndex],
          ...payload.value,
        }
        return {
          ...state,
          [payload.key]: {
            ...state[payload.key],
            items,
          },
        }
      }
    },
    deletePaginationItem: (state, { payload }) => ({
      ...state,
      [payload.key]: {
        ...state[payload.key],
        items: state[payload.key].items.filter(
          (item) => item[payload?.primaryKey || 'id'] !== payload?.value,
        ),
        total: state[payload.key].total - 1,
      },
    }),
    pagePaginationSuccess: (state, { payload }) => ({
      ...state,
      [payload.key]: { ...state[payload.key], ...payload.data },
    }),
    setRowsPerPage: (state, { payload }) => ({
      ...state,
      [payload.key]: {
        ...state[payload.key],
        rowsPerPage: payload.rowsPerPage,
        currentPage: payload.currentPage,
      },
    }),
    setCurrentPage: (state, { payload }) => ({
      ...state,
      [payload.key]: {
        ...state[payload.key],
        currentPage: payload.currentPage,
        count: state[payload.key].rowsPerPage * payload.currentPage,
      },
    }),
  },
})

export const selectPaginationItem =
  (payload) =>
  ({ pagination }) => {
    const items = [...pagination[payload.key].items]
    const currentIndex = items.findIndex(
      (item) => item.id === parseInt(payload.id, 10),
    )
    if (currentIndex === -1) return null
    return items[currentIndex]
  }

export const {
  pagePaginationSuccess,
  addPaginationItem,
  updatePaginationItem,
  deletePaginationItem,
  setRowsPerPage,
  setCurrentPage,
} = PaginationSlice.actions
export default PaginationSlice.reducer
