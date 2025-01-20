import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainApp } from './styled'

function App() {
  const storageKeyName = "count"
  const retriveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0)
  const [count, setCount] = useState(retriveCountValue());
  const addNumber = (count) => setCount(Number(count) + 1)

  useEffect(()=>{
    localStorage.setItem(storageKeyName, String(count));
  }, [count])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => addNumber(count)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <MainApp>
        <button onClick={() => addNumber(count)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </MainApp>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
