import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TestComponent } from './components/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <TestComponent/>
    </div>
  )
}

export default App
