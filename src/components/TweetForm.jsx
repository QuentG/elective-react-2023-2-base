import { useState } from 'react'
 
const TweetForm = () => {
  const [value, setValue] = useState('')
 
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(value)
    setValue('Tweet sent !')
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button 
        type="submit"
        disabled={value.length === 0 || value === 'Tweet sent !'}
        >
            Add tweet
        </button>
    </form>
  )
}
 
export default TweetForm