import { SERVER_URL } from '../config'
import { store } from '../store'
import { setAlert, userSignOut } from '../store/reducers'
import { encodeQuery } from './helperFunctions'
import { removeUserData } from './localStorage'

export const codeMessage = {
  200: 'The server successfully returned the requested data.  ',
  201: 'New or modified data is successful.',
  202: 'A request has entered the background queue (asynchronous task).',
  204: 'The data was deleted successfully.',
  400: 'The request was made with an error and the server did not perform any new or modified data operations.',
  401: 'Invalid credentials.',
  403: 'The user is authorized, but access is forbidden.',
  404: 'The request is made for a record that does not exist and the server does not operate.',
  405: 'The server has received a request method that is not supported for the target resource',
  406: 'The format of the request is not available.',
  410: 'The requested resource is permanently deleted and will not be retrieved.',
  422: 'A validation error occurred when creating an object.',
  500: 'An error occurred on the server. Please check the server.',
  502: 'Gateway error.',
  503: 'The service is unavailable and the server is temporarily overloaded or maintained.',
  504: 'The gateway timed out.',
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const errorText = codeMessage[response.status] || response.message
  const error = new Error(errorText)
  error.name = response.status
  error.response = response
  throw error
}

export default async function request(
  restApi,
  options,
  isToken = true,
  isFormData = false,
) {
  const { dispatch } = store

  const url = SERVER_URL + restApi

  const newOptions = { ...options }

  if (!isFormData) {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...(newOptions.headers || {}),
    }
    newOptions.body = JSON.stringify(newOptions.body)
  }

  if (isToken) {
    const userToken = store.getState().auth.token
    if (userToken) {
      newOptions.headers = {
        Authorization: 'Bearer ' + userToken,
        ...newOptions.headers,
      }
    }
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then((response) => {
      return response.json()
    })
    .catch(async (error) => {
      const status = error.name
      if (status == 401) {
        removeUserData()
        dispatch(userSignOut())
      } else {
        dispatch(
          setAlert({
            show: true,
            title: 'Failed!',
            success: false,
            message: codeMessage[status] || 'Something went wrong!',
          }),
        )
      }
      throw error
      // console.error('PRINT IN %s=====>', 'Show error===>', e);
    })
}


export const downloadExport = ({route, ...query}) => SERVER_URL + route + encodeQuery(query)