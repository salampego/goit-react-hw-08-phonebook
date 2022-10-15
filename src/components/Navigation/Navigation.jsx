import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import styled from 'styled-components';
import s from '../Navigation/Navigation.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Suspense } from 'react';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

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
          <nav>
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
          </nav>
          <div className={s.login}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </div>
      </header>
      <Suspense fallback={<b>Downloading page</b>}>
        <Outlet />
      </Suspense>
    </>
  );
};
