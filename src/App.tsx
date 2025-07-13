import './App.css'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import HomePage from './pages/homePage/HomePage'
import TaskPage from './pages/taskPage/TaskPage'
import type { FC } from 'react'
import Layout from './components/Layout/Layout'
const App:FC =() => {


  return (
    <>
    <Routes>
      <Route path="*" element={<NotFoundPage />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/task/:id" element={<TaskPage />}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
