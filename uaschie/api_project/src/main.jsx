import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import RouteList from './RouteList.jsx'
import { Provider } from 'react-redux'
import Store from './Pages/Redux/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={RouteList} />
    </Provider>
  </StrictMode>,
)
