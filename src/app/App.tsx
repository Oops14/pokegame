import { RouterProvider } from 'react-router-dom'

import '@/assets/styles/App.scss'

import router from '@/routes/root'

function App() {
  return <RouterProvider router={router} />
}

export default App
