/* Para Aparecer no commit de entrega*/
function Objetivo({ imagem, etapa, descricao }) {
    return (
        <article>
            <img src={imagem} alt={`Imagem objetivo ${etapa}`} />
            <h3>Etapa {etapa}</h3>
            <p>{descricao}</p>
        </article>
    );
}

export default Objetivo;