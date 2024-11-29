export const saveUserData = (token, user, user_type_id, userData) => {
  localStorage.setItem('token', token)
  localStorage.setItem('user', user)
  localStorage.setItem('user_type_id', user_type_id)
  localStorage.setItem('userData', JSON.stringify(userData))
}

export const getUserData = () => {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  const user_type_id = localStorage.getItem('user_type_id')
  const userData = localStorage.getItem('userData')
  return {
    token,
    user: JSON.parse(user),
    user_type_id: JSON.parse(user_type_id),
    userData: JSON.parse(userData),
  }
}

export const removeUserData = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('user_type_id')
  localStorage.removeItem('userData')
}
