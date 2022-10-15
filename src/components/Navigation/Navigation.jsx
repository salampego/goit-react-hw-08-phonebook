import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectEmail, selectIsLoggedIn } from 'redux/selectors';
import styled from 'styled-components';
import s from '../Navigation/Navigation.module.css';
import user from '../../images/user.jpg';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    &.active {
      color: orange;
    }
  `;

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.login}>
            {isLoggedIn && (
              <StyledLink className={s.link} to="/contacts">
                Contacts
              </StyledLink>
            )}
            <StyledLink className={s.link} to="/" end>
              Home
            </StyledLink>
          </div>
          <div className={s.login}>
            {isLoggedIn ? (
              <div className={s.user}>
                <img src={user} alt="user" width={30} />
                <span className={s.span}>{email}</span>
                <button type="button" onClick={() => dispatch(logOut())} className={s.btnLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <StyledLink className={s.link} to="/register">
                  Register
                </StyledLink>
                <StyledLink className={s.link} to="/login">
                  Login
                </StyledLink>
              </>
            )}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
