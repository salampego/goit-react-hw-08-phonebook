import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './HomePage.module.css';

export const WelcomePage = () => {
  const StyleNavigate = styled(NavLink)`
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92px;
    height: 41px;
    text-decoration: none;
    color: black;
    &:hover {
      background-color: #d1aa83;
      transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    }
  `;
  return (
    <div className={s.container}>
      <h1 align="center">Phone Book 💁‍♀️</h1>
      <p>Fast, Secure and Mobile Friendly React Application</p>
      <div className={s.link}>
        <StyleNavigate to="/contacts">Try it!</StyleNavigate>
      </div>
    </div>
  );
};
