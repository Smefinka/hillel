import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SmilesCards from './components/SmilesCards';
function App() {
  const [count, setCount] = useState(0)
  const emojies = [
    {
      'id': 1,
    'name': 'smile',
    'img': '😀'
  },
  {
    'id': 2,
    'name': 'sad',
    'img': '😔'
  },
  {
    'id': 3,
    'name': 'cat',
    'img': '🐈'
  }
]
  return (
    <>
     <SmilesCards emojies={emojies} />
    </>
  )
}

export default App
