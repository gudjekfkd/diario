function Produto({nome, preco, emEstoque}) {
    return (
        <>
        <h1>{nome}</h1>
        <p>{preco}R$</p>
        <p>{emEstoque ? "Disponível" : "Indisponível"}</p>
        </>
    )
}

export default Produto