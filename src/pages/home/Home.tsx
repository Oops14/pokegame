import { AppRootStateType } from '@/store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isInitialized) {
      navigate('/auth')
    }
  }, [isInitialized])

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
