/* Para Aparecer no commit de entrega*/
function EtapaTurorial({ titulo, imagem, alt, descricao, formula, formula2, video }) {
    return (
        <section>
            <h3>{titulo}</h3>
            <p className="objetivo"><b>Objetivo: </b></p>
            <img src={imagem} alt={alt} />
            <p>{descricao}</p>
            <p className="formula">{formula}</p>
            {formula2 && (
                <p className="formula">{formula2}</p>
            )}
            {video && (
                <>
                    <p>Video Suporte:</p>
                    <iframe width="560" height="315"
                        src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                </>
            )}
        </section>
    );
}

export default EtapaTurorial;