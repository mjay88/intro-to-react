import { useState } from 'react'
import TodoList from './TodoList'
import NavBar from "./NavBar";

import CssBaseline from "@mui/material/CssBaseline"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <CssBaseline />
    <TodoList />
    </>
  )
}

export default App
