import { Route, Routes } from 'react-router-dom'
import './App.css'
import { RoutesPages } from './pages/main'

function App() {

  return (
    <Routes>
      <Route path="*" element={<RoutesPages/>} />
    </Routes>
  )
}

export default App
