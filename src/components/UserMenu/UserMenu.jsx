import { logOut } from 'redux/auth/operations';
import s from './UserMenu.module.css';
import user from '../../images/user.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from 'redux/selectors';
export const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  return (
    <>
      <img src={user} alt="user" width={30} />
      <span className={s.span}>{email}</span>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={s.btnLogout}
      >
        Logout
      </button>
    </>
  );
};
