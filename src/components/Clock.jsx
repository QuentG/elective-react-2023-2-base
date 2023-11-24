import { useEffect, useState } from "react"

const Clock = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((counter) => counter + 1)
            console.log('Counter updated')
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <p>Clock : <strong>{counter}</strong></p>
    )
}

export default Clock