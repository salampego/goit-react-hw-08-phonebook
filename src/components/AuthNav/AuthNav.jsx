import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    &.active {
      color: orange;
    }
  `;

  return (
    <>
      <StyledLink className={s.link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={s.link} to="/login">
        Login
      </StyledLink>
    </>
  );
};
