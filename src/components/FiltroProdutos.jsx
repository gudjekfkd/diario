import { useState } from "react"

function FiltroProdutos () {
    const [termoBusca, setTermoBusca] = useState('')
    return (
        <div>
          <label>buscar produto:</label>
          <input 
            type="text" 
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            placeholder="pesquise aqui"
          />
        </div>
    )
}

export default FiltroProdutos