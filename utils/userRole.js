export const USER_ROLES = {
  ADMIN: 1,
  RECRUITER: 2,
  CANDIDATE: 3,
}

export const isAdmin = () => {
  const user_type_id = localStorage.getItem('user_type_id')
  return user_type_id == USER_ROLES.ADMIN
}
