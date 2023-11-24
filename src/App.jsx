import { useState, useEffect } from 'react'
import './App.css'
import Title from './components/Title'
import TweetForm from './components/TweetForm'
import UserEdit from './components/UserEdit'
import UserProfile from './components/UserProfile'
import Clock from './components/Clock'

function App() {
  const [count, setCount] = useState(5)
  const [user, setUser] = useState({ name: 'John', age: 42, month: 0 })
  const [showClock, setShowClock] = useState(false)

  const handleCount = () => {
    setCount((count) => count + 5)
  }

  // A l'arrivée dans le composant App.
  useEffect(() => {
    console.log('Component App Mounted')
  }, []) // Pas de dépedences donc le callback ne sera appelé qu'une seule fois.

  // A chaque changement de la variable count.
  useEffect(() => {
    console.log('Count has changed', count)
  }, [count])

  const users = [
    { name: 'John', age: 20, month: 0 },
    { name: 'Jane', age: 32, month: 0 },
    { name: 'Jack', age: 42, month: 0 },
  ]

  return (
    <>
      <Title text={'Mon premier texte'} />
      {users.map((user, index) => (
        <UserProfile key={index} name={user.name} age={user.age} />
      ))}

      <label htmlFor="">
        Show clock ?
        <input
          type='checkbox'
          checked={showClock}
          onChange={(e) => setShowClock(e.target.checked)}
        />
      </label>

      {showClock && <Clock />}

      <div className="card">
        <button onClick={handleCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMRoidnzaiocnaziodzan
        </p>
      </div>
      <UserEdit user={user} onChangeUser={setUser} />
      <TweetForm />
      <Title text='Mon second texte' />
    </>
  )
}

export default App
