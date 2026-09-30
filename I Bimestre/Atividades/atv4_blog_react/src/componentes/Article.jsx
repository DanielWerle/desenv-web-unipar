function Article({titulo, autor, date, conteudo}) {
    return (
        <article>
            <section id="introducao">
                <div className="introducao">
                    <h1>{titulo}</h1>
                    <p>{conteudo}</p>

                    <p>Autor: {autor}</p>
                    <p>Data: {date}</p>
                </div>                
            </section>
        </article>
    );
}

export default Article;