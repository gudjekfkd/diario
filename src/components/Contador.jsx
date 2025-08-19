import { useState } from "react"

function Contador() {
    const [contagem, setContagem] = useState(0)

    return (
        <div>
        <button onClick ={() => setContagem(contagem + 1)}>+</button>
        <p> {contagem} </p>
        <button onClick ={() => setContagem(contagem - 1)}>-</button>
        </div>
    )

}

export default Contador