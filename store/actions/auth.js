import AuthService from '../../services/AuthService'
import { saveUserData } from '../../utils/localStorage'
import { LOADING_NAME } from '../../utils/constants'
import { setAlert, setLoading, userSignIn } from '../reducers'
import { preConfirmAlert } from '../../utils/helperFunctions'

export const userLogin = ({
  loading = true,
  username,
  password,
  setError,
  reset,
}) => {
  return async (dispatch) => {
    const loadingObj = {
      key: LOADING_NAME.LOGIN,
      value: loading,
    }
    try {
      dispatch(setLoading(loadingObj))
      // console.log('error')
      // const { user } = getState().auth;
      let result = await AuthService.login({ username, password })

      if (result.success) {
        reset()
        const { token, ...data } = result?.data || {}
        const user = true
        const user_type_id = data?.user?.ref_user_type_id

        dispatch(userSignIn({ user, token, user_type_id, data: data?.user }))
        saveUserData(token, user, user_type_id, data?.user)
        dispatch(
          setAlert({
            show: true,
            success: true,
            title: 'Login Success',
            message: '',
          }),
        )
      } else {
        setError(
          'password',
          { message: 'Invalid Username or Password' },
          { shouldFocus: true },
        )
        dispatch(
          setAlert({
            show: true,
            success: false,
            title: 'Login Failed',
            message: result?.message,
          }),
        )
      }
    } catch (error) {
      // console.log(error)
      // dispatch(setAlert({ show: true, success: false, title: 'Login Failed', message: error?.message }))
      await preConfirmAlert({
        title: 'Login Failed',
        text: 'Invalid Username or Password',
        confirmButtonText: 'OK',
        confirmButton: 'btn btn-primary',
        show: true,
        showCancelButton: false,
        showDenyButton: false,
      })
    }

    loadingObj.value = false
    dispatch(setLoading(loadingObj))
  }
}
