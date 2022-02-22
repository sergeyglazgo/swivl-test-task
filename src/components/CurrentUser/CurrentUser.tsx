import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from '../../store/selectors';
import { loadUserAction } from '../../store/actions';
import './CurrentUser.scss';
import { getUser } from '../../api/users';

export const CurrentUser: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserSelector);
  const params = useParams();

  const loadUser = async () => {
    if (params.login) {
      const userFromServer = await getUser(params.login);

      dispatch(loadUserAction(userFromServer));
    }
  };

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, []);

  return (
    <>
      {user && (
        <div className="CurrentUser">
          <img
            className="CurrentUser__avatar"
            src={user.avatar_url}
            alt="avatar"
          />
          <h3 className="CurrentUser__name">{user.name}</h3>
          <p className="CurrentUser__info">
            {`Followers: ${user.followers}\n`}
            {`Following: ${user.following}\n`}
            {`Created at: ${user.created_at}\n`}
            {user.company && `Company: ${user.company}\n`}
            {user.email && `Email: ${user.email}\n`}
            {user.location && `Location: ${user.location}\n`}
            {user.bio && `Bio: ${user.bio}\n`}
            {user.blog && (
              <a href={user.blog} target="_blanc">
                {user.blog}
              </a>
            )}
          </p>
          <Link
            to="/"
            className="button CurrentUser__clear"
            onClick={() => dispatch(loadUserAction(null))}
          >
            All users
          </Link>
        </div>
      )}
    </>
  );
};
