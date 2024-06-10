import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [UserName, setUserName] = useState('King Gerent')
  return (
    <>
      <h1>
        Welcome To Global State {UserName}

        <component2/>
      </h1>
    </>
  )
}

export default App
