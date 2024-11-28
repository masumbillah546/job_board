import { setLoading } from '../reducers/loader'
import {
  pagePaginationSuccess,
  addPaginationItem,
  updatePaginationItem,
  deletePaginationItem,
  selectPaginationItem,
} from '../reducers/pagination'
// import { fakeData } from '../../utils/faker'
import {
  FETCH_TYPES,
  LOADING_NAME,
  TABLE_ROWS_PER_PAGE,
} from '../../utils/constants'
import { setAlert } from '../reducers'
import { preConfirmAlert } from '../../utils/helperFunctions'

export const getPaginationData =
  ({
    key,
    ServiceName,
    API,
    page = 1,
    per_page = TABLE_ROWS_PER_PAGE,
    ...query
  }) =>
  async (dispatch) => {
    const loadingObj = {
      key,
      value: true,
    }
    try {
      dispatch(setLoading(loadingObj))
      let res

      if (API === 'SEARCH') {
        res = await ServiceName.search(query)
      } else {
        if (ServiceName) {
          res = await ServiceName.get({ page, per_page, ...query })
        } else {
          res = [] // fakeData(145)
        }
      }
      if (res) {
        if (!ServiceName) {
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              dispatch(
                pagePaginationSuccess({
                  key,
                  data: {
                    total: res.length,
                    currentPage: 1,
                    count: TABLE_ROWS_PER_PAGE,
                    rowsPerPage: TABLE_ROWS_PER_PAGE,
                    items: res,
                  },
                }),
              )
              resolve()
            }, 1000)
          })
        } else {
          dispatch(
            pagePaginationSuccess({
              key,
              data: {
                total: res.data.total,
                currentPage: res.data.current_page,
                count: res.data.to,
                rowsPerPage: res.data.per_page,
                items: res.data.data,
              },
            }),
          )
        }
      }
    } catch (e) {
      console.error('PRINT IN %s=====>', 'Pagination fetch', e)
    } finally {
      loadingObj.value = false
      dispatch(setLoading(loadingObj))
    }
  }


/**
 * add or update pagination data
 *
 * @param {string} key - unique key of the pagination
 * @param {Object} ServiceName - service name of the data
 * @param {number} id - id of the data item to update
 * @param {string} primaryKey - primary key of the data
 * @param {boolean} isNotify - whether to notify user or not
 * @param {Object} value - value of the data item to update
 * @param {Object} body - body of the request
 * @returns {Promise} the response of the request
 */
export const addOrUpdatePaginationData =
  ({ key, ServiceName, id, primaryKey, isNotify = false, value, ...body }) =>
  async (dispatch) => {
    let res
    try {
      dispatch(setLoading({ key: LOADING_NAME.COMMON, value: true }))
      if (!id) {
        res = await ServiceName.create(body)
        if (res) {
          dispatch(
            addPaginationItem({
              value: res,
              key,
            }),
          )
        }
      } else {
        res = await ServiceName.update({ id, ...body })
        if (res.success) {
          dispatch(
            updatePaginationItem({
              id,
              primaryKey,
              key,
              value,
            }),
          )
        }
      }
      return res
    } catch (e) {
      return e.response.json()
    } finally {
      dispatch(setLoading({ key: LOADING_NAME.COMMON, value: false }))
    }
  }

export const deletePaginationData = (payload) => async (dispatch) => {
  const { ServiceName, key, route, id, title, primaryKey } = payload

  const { isConfirmed } = await preConfirmAlert({
    title: 'Are you sure to delete?',
    text: "You won't be able to revert this!",
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    confirmButton: 'btn btn-danger px-5',
    denyButton: 'btn btn-primary ms-3 px-5',
  })
  if (isConfirmed) {
    dispatch(setLoading({ key: LOADING_NAME.COMMON, value: true }))

    try {
      if (id) {
        const res = await ServiceName.remove({ id, route })
        if (res?.success) {
          dispatch(
            setAlert({
              show: true,
              success: true,
              title: title || 'Item deleted successfully',
              message: '',
            }),
          )
          dispatch(
            deletePaginationItem({
              key,
              primaryKey,
              value: id,
            }),
          )
          return res
        } else {
          dispatch(
            setAlert({
              show: true,
            }),
          )
        }
      }
      return false
    } catch (e) {
      throw e
    } finally {
      dispatch(setLoading({ key: LOADING_NAME.COMMON, value: false }))
    }
  }
}

export default getPaginationData
