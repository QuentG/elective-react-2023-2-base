import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import TweetForm from './components/TweetForm'
import UserEdit from './components/UserEdit'

function App() {
  const [count, setCount] = useState(5)
  const [user, setUser] = useState({ name: 'John', age: 42, month: 0 })

  const handleCount = () => {
    setCount((count) => count + 5)
  }

  return (
    <>
      <Title text={'Mon premier texte'} />
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
