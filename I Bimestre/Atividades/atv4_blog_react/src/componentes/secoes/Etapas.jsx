import objetivoUm from "../../imagens/objetivoUm.png";
import objetivoDois from "../../imagens/objetivoDois.png";
import objetivoTres from "../../imagens/objetivoTres.png";
import objetivoQuatro from "../../imagens/objetivoQuatro.png";
import objetivoCinco from "../../imagens/objetivoCinco.png";
import objetivoSeis from "../../imagens/objetivoSeis.png";
import objetivoSete from "../../imagens/objetivoSete.png";

import Objetivo from "../tutorial/Objetivo";
import EtapaTutorial from "../tutorial/EtapaTutorial";

/* Para Aparecer no commit de entrega*/
function Etapas() {
    return (
        <section id="etapas">
            <section className="objetivos">
                <h2>Etapas</h2>
                <p>Iremos passar por cada uma dessas etapas para realizar a conclusão</p>

                <div className="objetivosContainer">

                    <Objetivo
                        imagem={objetivoUm}
                        etapa={1}
                        descricao={"Margarida (Cruz inicial) e Cruz Branca"}
                    />

                    <Objetivo
                        imagem={objetivoDois}
                        etapa={2}
                        descricao={"Primeira camada"}
                    />

                    <Objetivo
                        imagem={objetivoTres}
                        etapa={3}
                        descricao={"Segunda camada"}
                    />

                    <Objetivo
                        imagem={objetivoQuatro}
                        etapa={4}
                        descricao={"Cruz amarela"}
                    />

                    <Objetivo
                        imagem={objetivoCinco}
                        etapa={5}
                        descricao={"Resolver as Bordas da Terceira Camada"}
                    />

                    <Objetivo
                        imagem={objetivoSeis}
                        etapa={6}
                        descricao={"Orientar os Cantos da Terceira Camada"}
                    />

                    <Objetivo
                        imagem={objetivoSete}
                        etapa={7}
                        descricao={"Conclusão do Cubo"}
                    />
                </div>
            </section>

            <hr />

            <section className="tutorial">
                <EtapaTutorial
                    titulo={"Etapa 1 - Margarida (Cruz Inicial) - Junto com a Cruz Branca"}
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/07/metodo-basico-cubo-magico-01.png"}
                    alt={"Objetivo margarida"}
                    descricao={"Essa etapa é bem simples, só é necessário colocar as laterais brancas junto com o centro amarelo. Vale dizer que nessa etapa não é necessário uma fórmula, afinal são muitas possibilidades e acaba sendo mais fácil posicionar por conta própria, do que aprender possíveis fórmulas que talvez nunca vão acontecer."}
                    formula={"Não possui uma fórmula"}
                />

                <EtapaTutorial
                    titulo={"Cruz Branca"}
                    imagem={objetivoUm}
                    alt={"Objetivo um"}
                    descricao={"Aqui iremos alinhar as cores das laterais brancas com o centro da segunda cor, e assim girar a face duas vezes. Como exemplo, a peça branca azul, deve estar alinhada com o centro azul, girando ela duas vezes o lado branco estará junto com o centro branco. Aqui também não possui uma fórmula exata."}
                    formula={"Não possui uma fórmula"}
                    video={"https://www.youtube.com/embed/aJuUOG9FYlM?si=tEcwn9G7XoHFA1F4&amp;start=174"}
                />

                <EtapaTutorial
                    titulo={"Etapa 2 - Primeira Camada"}
                    imagem={objetivoDois}
                    alt={"Objetivo dois"}
                    descricao={"Nesta etapa iremos montar a face branca, Aqui também não é muito necessário uma fórmula, por mais que no vídeo ensine uma, Basicamente os canto devem estar de acordo com cada centro, ou seja, O canto branco-vermelho-azul, tem que estar onde essas três cores se encontram."}
                    formula={"Não possui uma fórmula"}
                    video={"https://www.youtube.com/embed/aJuUOG9FYlM?si=R9Nk9KVBQizJbPVu&amp;start=263"}
                />

                <EtapaTutorial
                    titulo={"Etapa 3 - Segunda Camada"}
                    imagem={objetivoTres}
                    alt={"Objetivo tres"}
                    descricao={"Nesta etapa iremos montar a segunda camada, que se consiste nos lados do cubo, A partir daqui usaremos fórmulas para mover uma peça no seu devido lugar, Você irá posicionar a cor de mesmo centro juntos, e analisar para qual lado a segunda cor deve estar, na direita ou esquerda."}
                    formula={<>
                        Caso a cor de cima seja para esquerda: <br />
                        U' L' U' L U <br />
                        Gire o Cubo Para Direita <br />
                        R U R' U'
                    </>
                    }
                    formula2={<>
                        Caso a cor de cima seja para direita: <br />
                        U R U R' U' <br />
                        Gire o Cubo Para Esquerda <br />
                        L' U' L U
                    </>
                    }
                    video={"https://www.youtube.com/embed/aJuUOG9FYlM?si=3xTWm9Eo8Qld2fkS&amp;start=344"}
                />

                <EtapaTutorial
                    titulo={"Etapa 4 - Cruz Amarela"}
                    imagem={objetivoQuatro}
                    alt={"Objetivo quatro"}
                    descricao={"Nesta etapa iremos formar uma cruz amarela na parte superior, Há três possibilidades, que tenha uma linha amarela, ou um L, ou nenhuma borda amarela. Faça a fórmula na parte em que não possui bordas amarelas, No caso do L fica mais fácil fazer onde ele fica espelhado para esquerda."}
                    formula={"Fórmula: F R U R' U' F'"}
                    video={"https://www.youtube.com/embed/aJuUOG9FYlM?si=sv-1YyloewqHffWq&amp;start=432"}
                />

                <EtapaTutorial
                    titulo={"Etapa 5 - Resolver as Bordas da Terceira Camada"}
                    imagem={objetivoCinco}
                    alt={"Objetivo cinco"}
                    descricao={"Nesta etapa iremos realocar a segunda cor de cada borda da cruz amarela para que estejam juntas a sua mesma cor de centro. Duas das quatro bordas estarão correspondendo com seu centro, com isso podemos ter dois casos, um em que elas estejam viradas uma para outra, como exemplo, vermelho e laranja ou em que elas estejam lado a lado, como vermelho e verde. Caso estejam viradas usaremos a fórmula em uma das duas faces que não estejam correspondendo com o seu centro. Caso estejam lado a lado usaremos a formula na face esquerda da cor correspondente, como exemplo, na face verde e laranja, aplicaremos a fórmula na face vermelha."}
                    formula={"Fórmula: R U R' U R U2 R'"}
                    video={"https://www.youtube.com/embed/aJuUOG9FYlM?si=2hkVOn5V5OpxM2yo&amp;start=474"}
                />

                <EtapaTutorial
                    titulo={"Etapa 6 - Orientar os Cantos da Terceira Camada"}
                    imagem={objetivoSeis}
                    alt={"Objetivo seis"}
                    descricao={"Nesta etapa iremos colocar dois cantos da terceira camada correspondendo com seus centros Aqui existe várias possibilidades de como cada canto está, então o mais fácil é repetir a fórmula até que dois desses quatro cantos estejam no lugar certo, O melhor a se fazer é aplicar a fórmula onde um dos cantos já esteja resolvido, pois ele irá continuar no mesmo lugar."}
                    formula={"Fórmula: U R U' L' U R' U' L"}
                    video={"https://www.youtube.com/embed/aJuUOG9FYlM?si=RqPqRM5B5R3QVsiF&amp;start=555"}
                />

                <EtapaTutorial
                    titulo={"Etapa 7 - Conclusão do Cubo"}
                    imagem={objetivoSete}
                    alt={"Objetivo sete"}
                    descricao={"Esta etapa é a mais sensível, pois um erro e terá que fazer tudo do início, A face amarela deve estar voltada para você, realize a fórmula no canto que está com as cores diferentes de seus centros, repita a fórmula de início a fim, até que o lado amarelo esteja junto com o seu centro, gire a face amarela 'F', e repita a fórmula no canto que não está de acordo com o centro amarelo, quando este canto estiver coincidindo com seus centros retorne a face amarela 'F', até que todos os lados estejam concluidos"}
                    formula={"Fórmula: U R' U' R"}
                    video={"https://www.youtube.com/embed/aJuUOG9FYlM?si=gcYh3JRdAMFgLJrX&amp;start=595"}
                />
            </section>
        </section>
    );
}

export default Etapas;