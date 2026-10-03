/* Para Aparecer no commit de entrega*/
function Introducao({ titulo, autor, data, conteudo }) {
    return (
        <section id="introducao">
            <div className="introducao">
                <h1>{titulo}</h1>
                <p>{conteudo}</p>

                <p>Autor: {autor}</p>
                <p>Data: {data}</p>
            </div>
        </section>
    );
}

export default Introducao;