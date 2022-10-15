import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import s from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'userName':
        return setUserName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name: userName, email, password }));
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section className={s.section}>
      <form onSubmit={handleSubmit}>
        <div className={s.RegisterForm}>
          <label>
            <p className={s.p}>Username</p>
            <input
              type="text"
              name="userName"
              onChange={handleChange}
              value={userName}
              placeholder={'username'}
            />
          </label>
          <label>
            <p className={s.p}>Email</p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder={'email'}
            />
          </label>
          <label>
            <p className={s.p}>Password</p>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              placeholder={'password'}
            />
          </label>
        </div>
        <button type="submit" className={s.btnSubmit}>
          Register
        </button>
      </form>
    </section>
  );
}
