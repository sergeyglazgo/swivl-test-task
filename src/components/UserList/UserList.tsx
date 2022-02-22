import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUsers } from '../../api/users';
import { loadUserAction, loadUsersAction } from '../../store/actions';
import { getUsersSelector } from '../../store/selectors';
import './UserList.scss';

export const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);

  const loadUsers = async () => {
    const usersFromServer = await getUsers();

    dispatch(loadUsersAction(usersFromServer));
  };

  const handleSelectUser = async (login: string) => {
    const user = await getUser(login);

    dispatch(loadUserAction(user));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="UserList">
      <h2 className="UserList__title">Users:</h2>
      <div className="UserList__list-container">
        <ul className="UserList__list">
          {users.map(user => (
            <li
              key={user.id}
              className="UserList__item"
            >
              <img
                src={user.avatar_url}
                alt="avatar"
                className="UserList__item-avatar"
              />
              <div className="UserList__item-info-container">
                <div>
                  <span className="UserList__item-login">
                    {user.login}
                  </span>
                  <br />
                  <a
                    href={user.html_url}
                    className="UserList__item-url"
                    target="_blanc"
                  >
                    {user.html_url}
                  </a>
                </div>

                <div>
                  <Link
                    to={`/${user.login}`}
                    className="UserList__user-button button"
                    onClick={() => handleSelectUser(user.login)}
                  >
                    {`User #${user.id}`}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
