import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//state => title, descrption, completed button?

function App() {
  const [todoState, setToDoCount] = useState([{
    id: 1,
    title: 'New ToDo',
    isCompleted: false
  }])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {
        todoState.map(toDoItem => {
          return <div className="card">
            <p style={{textDecoration: toDoItem.isCompleted ? 'line-through' : 'none'}}>
              {toDoItem.title}
            </p>
            <button onClick={() => setToDoCount((todoState) => [{
              ...toDoItem,
              isCompleted: true
            }])}>
              Mark to Done
            </button>
          </div>
        })
      }
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
