function Lista({ itens }) {
    return (
        <>
            <h2>Lista de itens</h2>
            <ol>
                {itens.length > 0 ? (
                    itens.map((item, index) => <li key={index}>{item}</li>) 
                ) : (
                    <li>Não há itens na lista!</li>
                )}
            </ol>
        </>
    )
}

export default Lista;