import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@/pages/home/Home'
import { Auth } from '@/pages/auth/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
])

export default router
