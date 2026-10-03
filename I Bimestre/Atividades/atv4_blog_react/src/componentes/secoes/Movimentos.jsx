import Movimento from "../tutorial/Movimento";

/* Para Aparecer no commit de entrega*/
function Movimentos() {
    return (
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
                <Movimento
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-rh-2.png"}
                    movimento={"R"}
                    descricao={"Right / Direita horário"}
                />

                <Movimento
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-ra-2.png"}
                    movimento={"R'"}
                    descricao={"Right / Direita anti-horário"}
                />

                <Movimento
                    imagem={"https://cubovelocidade.com.br/wp-content/uploads/2020/05/movimento-cubo-magico-rd-2.png"}
                    movimento={"R2"}
                    descricao={"Right / Direita duplo"}
                />

                <Movimento
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-lh-2.png"}
                    movimento={"L"}
                    descricao={"Left / Esquerda horário"}
                />
                
                <Movimento
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-la-2.png"}
                    movimento={"L'"}
                    descricao={"Left / Esquerda anti-horário"}
                />

                <Movimento
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-uh-2.png"}
                    movimento={"U"}
                    descricao={"Up / Topo horário"}
                />

                <Movimento
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-dh.png"}
                    movimento={"D"}
                    descricao={"Down / Base horário"}
                />
                
                <Movimento
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-fh-2.png"}
                    movimento={"F"}
                    descricao={"Front / Face horário"}
                />
               
                <Movimento
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-bh-2.png"}
                    movimento={"B"}
                    descricao={"Back / Atrás horário"}
                />
            </div>
        </section>
    );
}

export default Movimentos;