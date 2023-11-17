
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import AuthLayout from './layouts/AuthLayout'
import Auth from './pages/Auth'
import RutaProtegida from './layouts/RutaProtegida'
import Avicola from './pages/Avicola'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Auth />}/>
          </Route>

          <Route path='/avicola' element={<RutaProtegida />}>
            <Route index element={<Avicola />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
