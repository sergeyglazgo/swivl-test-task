export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USER = 'LOAD_USER';

export const loadUsersAction = (payload: User[]) => ({
  type: LOAD_USERS,
  payload,
});

export const loadUserAction = (payload: UserInfo | null) => ({
  type: LOAD_USER,
  payload,
});
