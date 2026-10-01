function Movimento({ imagem, movimento, descricao }) {
    return (
        <article>
            <img src={imagem}
                alt={`Imagem movimento ${descricao}`} />

            <p><b>{movimento}</b> - {descricao}</p>
        </article>
    );
}

export default Movimento;