import Introducao from "../secoes/Introducao";
import Pecas from "../secoes/Pecas"
import Movimentos from "../secoes/Movimentos";
import Etapas from "../secoes/Etapas";
import Comentarios from "../secoes/Comentarios";

/* Para Aparecer no commit de entrega*/
function Article({ props }) {
    return (
        <article>
            <Introducao
                titulo={props.titulo}
                autor={props.autor}
                data={props.data}
                conteudo={props.conteudo}
            />

            <hr />

            <Pecas />

            <hr />

            <Movimentos />

            <hr />

            <Etapas />

            <hr />

            <Comentarios />
        </article>
    );
}

export default Article;