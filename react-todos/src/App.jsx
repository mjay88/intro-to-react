import { useState } from 'react'
import TodoList from './TodoList'
import CssBaseline from "@mui/material/CssBaseline"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CssBaseline />
    <TodoList />
    </>
  )
}

export default App
