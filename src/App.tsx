import './App.css'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
function App() {


  return (
    <>
    <Routes>
      <Route path="*" element={<NotFoundPage />}></Route>
      <Route path="/" element={<HomePage />}>
        <Route path=":id" element={<TaskPage />}>
        
        </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
