import { useState } from 'react'
import clsx from 'clsx'

import { BaseInput } from '@/ui/baseInput/BaseInput.tsx'
import { BaseButton } from '@/ui/baseButton/BaseButton'

import s from './AuthForm.module.scss'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = () => {
    if (!login || !password || !passwordConfirm) {
      setError('All fields are required.')
      return
    }

    if (password !== passwordConfirm) {
      setError('Passwords do not match.')
      return
    }

    localStorage.setItem('user', JSON.stringify({ login, password }))
    setError('')
    setIsLogin(true)
    alert('User registered successfully!')
  }

  const handleSignIn = () => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}')

    if (storedUser.login === login && storedUser.password === password) {
      setError('')
      alert('Login successful!')
    } else {
      setError('Invalid login or password.')
    }
  }

  return (
    <div className={s.auth_form_container}>
      <div className={s.auth_form__top_panel}>
        <div
          className={clsx(s.auth_form__top_panel__button, {
            [s.active]: isLogin,
          })}
          onClick={() => setIsLogin(true)}>
          Sign In
        </div>
        <div
          className={clsx(s.auth_form__top_panel__button, {
            [s.active]: !isLogin,
          })}
          onClick={() => setIsLogin(false)}>
          Sign Up
        </div>
      </div>

      {isLogin ? (
        <form
          className={s.auth_form}
          onSubmit={(e) => {
            e.preventDefault()
            handleSignIn()
          }}>
          <div className={s.auth_form__item}>
            <label>
              <span className={s.auth_form__item__requred_icon}>* </span>
              Login
            </label>
            <BaseInput placeholder="Input login" value={login} onChange={(e) => setLogin(e.target.value)} />
          </div>

          <div className={s.auth_form__item}>
            <label>
              <span className={s.auth_form__item__requred_icon}>* </span>
              Password
            </label>
            <BaseInput
              placeholder="Input password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <div className={s.error}>{error}</div>}

          <BaseButton type="submit">Sign In</BaseButton>
        </form>
      ) : (
        <form
          className={s.auth_form}
          onSubmit={(e) => {
            e.preventDefault()
            handleSignUp()
          }}>
          <div className={s.auth_form__item}>
            <label>
              <span className={s.auth_form__item__requred_icon}>* </span>
              Login
            </label>
            <BaseInput placeholder="Input login" value={login} onChange={(e) => setLogin(e.target.value)} />
          </div>

          <div className={s.auth_form__item}>
            <label>
              <span className={s.auth_form__item__requred_icon}>* </span>
              Password
            </label>
            <BaseInput
              placeholder="Input password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={s.auth_form__item}>
            <label>
              <span className={s.auth_form__item__requred_icon}>* </span>
              Password confirmation
            </label>
            <BaseInput
              placeholder="Input password again"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          {error && <div className={s.error}>{error}</div>}

          <BaseButton type="submit">Sign Up</BaseButton>
        </form>
      )}
    </div>
  )
}

export default AuthForm
