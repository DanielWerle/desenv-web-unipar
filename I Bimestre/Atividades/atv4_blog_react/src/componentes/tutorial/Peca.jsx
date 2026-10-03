function Peca({ imagem, nome, descricao }) {
    return (
        <article>
            <img src={imagem} alt={`Imagem ${nome} do cubo`}/>

            <h3>{nome}</h3>

            <p>{descricao}</p>
        </article>
    );
}

export default Peca;