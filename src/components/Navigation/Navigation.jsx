import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import styled from 'styled-components';
import s from '../Navigation/Navigation.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
        <nav>
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
                <UserMenu />
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
        </nav>
      </header>
      <Outlet />
    </>
  );
};
