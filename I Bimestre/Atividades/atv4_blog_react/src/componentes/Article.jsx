import objetivoUm from "../imagens/objetivoUm.png";
import objetivoDois from "../imagens/objetivoDois.png";
import objetivoTres from "../imagens/objetivoTres.png";
import objetivoQuatro from "../imagens/objetivoQuatro.png";
import objetivoCinco from "../imagens/objetivoCinco.png";
import objetivoSeis from "../imagens/objetivoSeis.png";
import objetivoSete from "../imagens/objetivoSete.png";

function Article({titulo, autor, data, conteudo}) {
    return (
        <article>
            <section id="introducao">
                <div className="introducao">
                    <h1>{titulo}</h1>
                    <p>{conteudo}</p>

                    <p>Autor: {autor}</p>
                    <p>Data: {data}</p>
                </div>                
            </section>

            <hr />
            
            <section id="pecas">
                <h2>Nome de cada peça</h2>

                <div className="pecasContainer">
                    <article>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2xNem0UaiWtWXQJ2_isUsL9vnlqg19Zx5VEqGJGSNw&s=10" 
                        alt="Imagem centro do cubo" />

                        <h3>Centro</h3>

                        <p>
                            São as 6 peças centrais do cubo. 
                            Elas são fixas e indicam a cor da face. 
                            Por exemplo, o centro amarelo indica que a face deverá ser toda amarela.
                        </p>
                    </article>

                    <article>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfgTUnBcvNkYbrfwbatBYd0Glex0vlwXYKUgkpxOqyA&s=10" 
                        alt="Imagem laterais do cubo" />

                        <h3>Laterais</h3>

                        <p>
                            O cubo possui 12 meios, que são as peças que têm 2 cores.
                        </p>
                    </article>

                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/pecas-cubo-magico-quinas-.png" 
                        alt="Imagem Quinas do cubo" />
                        
                        <h3>Quinas</h3>

                        <p>
                            Temos um total de 8 quinas, que são as peças que têm 3 cores e ficam nas pontas do cubo.
                        </p>
                    </article>
                </div>
            </section>

            <hr />

            <section id="movimentos">
                <div className="tituloMovimentos">
                    <h2>Movimentos</h2>
                    <p>É importante sabermos como ler os movimentos do cubo, 
                        pois com isso iremos solucionar o Cubo Mágico, nós vamos utilizar algumas fórmulas, 
                        que são sequencias de movimentos que podem ser escritos (traduzidos) com letras. 
                        Parece muito complexo, mas é extremamente simples e intuitivo.
                    </p>
                    
                    <p>Cada lado do cubo é representado pela sua inicial em inglês. 
                        Se a letra estiver sozinha significa que o movimento é no sentido horário. 
                        Se estiver acompanhada de um apóstrofo, significa que é no sentido anti-horário. 
                        E se for seguida do número 2, significa que é um movimento duplo.
                    </p>

                    <h3>Vídeo Tutorial</h3>
                    <div className="videoContainer">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/F6WyMUSLHZo?si=s5RlajWPg1ukuLAZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="movimentosContainer">
                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-rh-2.png" 
                        alt="Imagem movimento direito horário" />
                        
                        <p><b>R </b> - Right / Direita horário</p>
                    </article>

                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-ra-2.png" 
                        alt="Imagem movimento direito anti-horário'" />

                        <p><b>R' </b> - Right / Direita anti-horário</p>
                    </article>

                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-rd-2.png" 
                        alt="Imagem movimento direito duas vezes" />

                        <p><b>R2 </b> - Right / Direita duplo</p>
                    </article>

                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-lh-2.png" 
                        alt="Imagem movimento esquerdo horário" />

                        <p><b>L </b> - Left / Esquerda horário</p>
                    </article>

                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-la-2.png" 
                        alt="Imagem movimento esquerdo anti-horário"/>

                        <p><b>L' </b> - Left / Esquerda anti-horário</p>
                    </article>

                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-uh-2.png" 
                        alt="Imagem movimento topo horário"/>

                        <p><b>U </b> - Up / Topo horário</p>
                    </article>

                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-dh.png" 
                        alt="Imagem movimento base horário" />

                        <p><b>D </b> - Down / Base horário </p>
                    </article>

                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-fh-2.png" 
                        alt="Imagem movimento face horário" />

                        <p><b>F </b> - Front / Face horário </p>
                    </article>

                    <article>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-bh-2.png" 
                        alt="Imagem movimento atrás horário" />

                        <p><b>B </b> - Back / Atrás horário</p>
                    </article>
                </div>
            </section>

            <hr />

            <section id="etapas">
                <section className="objetivos">
                    <h2>Etapas</h2>
                    <p>Iremos passar por cada uma dessas etapas para realizar a conclusão</p>

                    <div className="objetivosContainer">

                        <article>
                            <img src={objetivoUm} alt="Objetivo um" />
                            <h3>Etapa 1</h3>
                            <p>Margarida (Cruz inicial) e Cruz Branca</p>
                        </article>

                        <article>
                            <img src={objetivoDois} alt="Objetivo dois" />
                            <h3>Etapa 2</h3>
                            <p>Primeira camada</p>
                        </article>

                        <article>
                            <img src={objetivoTres} alt="Objetivo três" />
                            <h3>Etapa 3</h3>
                            <p>Segunda camada</p>
                        </article>

                        <article>
                            <img src={objetivoQuatro} alt="Objetivo quatro" />
                            <h3>Etapa 4</h3>
                            <p>Cruz amarela</p>
                        </article>

                        <article>
                            <img src={objetivoCinco} alt="Objetivo cinco" />
                            <h3>Etapa 5</h3>
                            <p>Resolver as Bordas da Terceira Camada</p>
                        </article>

                        <article>
                            <img src={objetivoSeis} alt="Objetivo seis" />
                            <h3>Etapa 6</h3>
                            <p>Orientar os Cantos da Terceira Camada</p>
                        </article>

                        <article>
                            <img src={objetivoSete} alt="Objetivo sete" />
                            <h3>Etapa 7</h3>
                            <p>Conclusão do Cubo</p>
                        </article>
                    </div>
                </section>

                <hr />

                <section className="tutorial">
                    <section>
                        <h3>Etapa 1 - Margarida (Cruz Inicial) - Junto com a Cruz Branca</h3>
                        <p className="objetivo"><b>Objetivo: </b></p>
                        <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/07/metodo-basico-cubo-magico-01.png" 
                        alt="Objetivo margarida" />
                        <p>
                            Essa etapa é bem simples, só é necessário colocar as laterais brancas junto com o centro amarelo.
                            Vale dizer que nessa etapa não é necessário uma fórmula, afinal são muitas possibilidades 
                            e acaba sendo mais fácil posicionar por conta própria, do que aprender possíveis fórmulas que talvez nunca vão acontecer.
                        </p>
                        <p className="formula">Não possui uma fórmula</p>
                    </section>

                    <section>
                        <h3>Cruz Branca</h3>
                        <p className="objetivo"><b>Objetivo: </b></p>
                        <img src={objetivoUm} alt="Objetivo um" />
                        <p>
                            Aqui iremos alinhar as cores das laterais brancas com o centro da segunda cor, e assim girar a face duas vezes.
                            Como exemplo, a peça branca azul, deve estar alinhada com o centro azul, 
                            girando ela duas vezes o lado branco estará junto com o centro branco.
                            Aqui também não possui uma fórmula exata.
                        </p>
                        <p className="formula">Não possui uma fórmula</p>
                        <p>Video Suporte:</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aJuUOG9FYlM?si=tEcwn9G7XoHFA1F4&amp;start=174" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>

                    <section>
                        <h3>Etapa 2 - Primeira Camada</h3>
                        <p className="objetivo"><b>Objetivo: </b></p>
                        <img src={objetivoDois} alt="Objetivo dois" />
                        <p>Nesta etapa iremos montar a face branca,
                            Aqui também não é muito necessário uma fórmula, por mais que no vídeo ensine uma,
                            Basicamente os canto devem estar de acordo com cada centro, ou seja,
                            O canto branco-vermelho-azul, tem que estar onde essas três cores se encontram.
                        </p>
                        <p className="formula">Não possui uma fórmula</p>
                        <p>Video Suporte:</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aJuUOG9FYlM?si=R9Nk9KVBQizJbPVu&amp;start=263" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>

                    <section>
                        <h3>Etapa 3 - Segunda Camada</h3>
                        <p className="objetivo"><b>Objetivo:</b></p>
                        <img src={objetivoTres} alt="Objetivo tres" />
                        <p>Nesta etapa iremos montar a segunda camada, que se consiste nos lados do cubo, 
                            A partir daqui usaremos fórmulas para mover uma peça no seu devido lugar,
                            Você irá posicionar a cor de mesmo centro juntos, e analisar para qual lado a segunda cor deve estar, na direita ou esquerda.
                        </p>

                        <p className="formula">Caso a cor de cima seja para esquerda: <br/>
                            U' L' U' L U <br/>
                            Gire o Cubo Para Direita <br/>
                            R U R' U'
                        </p>

                        <p className="formula">Caso a cor de cima seja para direita: <br/>                    
                            U R U R' U' <br/>
                            Gire o Cubo Para Esquerda <br/> 
                            L' U' L U
                        </p>
                            
                        <p>Video Suporte:</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aJuUOG9FYlM?si=3xTWm9Eo8Qld2fkS&amp;start=344" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>

                    <section>
                        <h3>Etapa 4 - Cruz Amarela</h3>
                        <p className="objetivo"><b>Objetivo:</b></p>
                        <img src={objetivoQuatro} alt="Objetivo quatro" />
                        <p>Nesta etapa iremos formar uma cruz amarela na parte superior,
                            Há três possibilidades, que tenha uma linha amarela, ou um L, ou nenhuma borda amarela.
                            Faça a fórmula na parte em que não possui bordas amarelas,
                            No caso do L fica mais fácil fazer onde ele fica espelhado para esquerda.</p>
                        <p className="formula">Fórmula: F R U R' U' F'</p>
                        <p>Video Suporte:</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aJuUOG9FYlM?si=sv-1YyloewqHffWq&amp;start=432" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>

                    <section>
                        <h3>Etapa 5 - Resolver as Bordas da Terceira Camada</h3>
                        <p className="objetivo"><b>Objetivo:</b></p>
                        <img src={objetivoCinco} alt="Objetivo cinco" />
                        <p>Nesta etapa iremos realocar a segunda cor de cada borda da cruz amarela para que estejam juntas a sua mesma cor de centro.
                            Duas das quatro bordas estarão correspondendo com seu centro,
                            com isso podemos ter dois casos, um em que elas estejam viradas uma para outra, como exemplo, vermelho e laranja
                            ou em que elas estejam lado a lado, como vermelho e verde.
                            Caso estejam viradas usaremos a fórmula em uma das duas faces que não estejam correspondendo com o seu centro.
                            Caso estejam lado a lado usaremos a formula na face esquerda da cor correspondente, como exemplo, na face verde e laranja, aplicaremos a fórmula na face vermelha.
                        </p>
                        <p className="formula">Fórmula: R U R' U R U2 R'</p>
                        <p>Video Suporte:</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aJuUOG9FYlM?si=2hkVOn5V5OpxM2yo&amp;start=474" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>

                    <section>
                        <h3>Etapa 6 - Orientar os Cantos da Terceira Camada</h3>
                        <p className="objetivo"><b>Objetivo:</b></p>
                        <img src={objetivoSeis} alt="Objetivo seis" />
                        <p>Nesta etapa iremos colocar dois cantos da terceira camada correspondendo com seus centros
                            Aqui existe várias possibilidades de como cada canto está, 
                            então o mais fácil é repetir a fórmula até que dois desses quatro cantos estejam no lugar certo,
                            O melhor a se fazer é aplicar a fórmula onde um dos cantos já esteja resolvido, 
                            pois ele irá continuar no mesmo lugar.
                        </p>
                        <p className="formula">Fórmula: U R U' L' U R' U' L</p>
                        <p>Video Suporte:</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aJuUOG9FYlM?si=RqPqRM5B5R3QVsiF&amp;start=555" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                    
                    <section>
                        <h3>Etapa 7 - Conclusão do Cubo</h3>
                        <p className="objetivo"><b>Objetivo:</b></p>
                        <img src={objetivoSete} alt="Objetivo sete" />
                        <p>Esta etapa é a mais sensível, pois um erro e terá que fazer tudo do início,
                            A face amarela deve estar voltada para você, realize a fórmula no canto que está com as cores diferentes de seus centros,
                            repita a fórmula de início a fim, até que o lado amarelo esteja junto com o seu centro, gire a face amarela 'F', 
                            e repita a fórmula no canto que não está de acordo com o centro amarelo,
                            quando este canto estiver coincidindo com seus centros retorne a face amarela 'F', até que todos os lados estejam concluidos.
                        </p>
                        <p className="formula">Fórmula: U R' U' R</p>
                        <p>Video Suporte:</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aJuUOG9FYlM?si=gcYh3JRdAMFgLJrX&amp;start=595" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                </section>
            </section>

            <hr />

            <section id="comentarios">
                <h2>Comentários</h2>

                <form>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome"/>
                    </div>

                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email"/>
                    </div>

                    <div>
                        <label htmlFor="nivel">Nível:</label>
                        <select id="nivel" name="nivel">
                            <option value="">Selecione seu nível</option>
                            <option value="iniciante">Iniciante</option>
                            <option value="intermediario">Intermediário</option>
                            <option value="avancado">Avançado</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="comentario">Comentário:</label>
                        <textarea id="comentario" name="comentario" rows="5"></textarea>
                    </div>

                    <button type="submit">Enviar comentário</button>
                </form>
            </section>
        </article>
    );
}

export default Article;