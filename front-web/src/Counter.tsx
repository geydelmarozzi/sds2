import { useState } from "react"

function Counter() {
    const [counter, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(counter + 1);
    }

    const handleDecrease = () => {
        setCount(counter - 1);
    }    

    return (
        <div>
            <button onClick={handleIncrease}>Incrementar</button>
            <button onClick={handleDecrease}>Decrementar</button>
            <h3>Valor do Contador: {counter}</h3>
        </div>
    )
}

export default Counter;