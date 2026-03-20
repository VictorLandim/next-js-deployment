import { useEffect, useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        if (count === 20) {
            alert("Hey, you hit 20!")
        }
    }, [count])

    return (
        <button className="counter-button" onClick={increment}>
            Clicks: {count}
        </button>
    )
}
