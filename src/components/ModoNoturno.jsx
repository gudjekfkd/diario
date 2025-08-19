import { useState } from "react";

    function ModoNoturno() {
        const [modoNoturno, setModoNoturno] = useState(false)

        return (
            <div className={modoNoturno ? 'dark' : 'light'}>
                <h1>titulo</h1>
                <p>paragrafo</p>
                <button onClick={() => setModoNoturno(!modoNoturno)}>Mudar Modo</button>
            </div>
        )
    }

export default ModoNoturno