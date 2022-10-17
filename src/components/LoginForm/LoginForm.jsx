import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

import s from './LoginForm.module.css';
export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <section className={s.section}>
      <form onSubmit={handleSubmit}>
        <div className={s.loginForm}>
          <label>
            <p className={s.p}>Email</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder={'email'}
            />
          </label>
          <label>
            <p className={s.p}>Password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder={'password'}
            />
          </label>
        </div>
        <button type="submit" className={s.btnSubmit}>
          Log In
        </button>
      </form>
    </section>
  );
}
