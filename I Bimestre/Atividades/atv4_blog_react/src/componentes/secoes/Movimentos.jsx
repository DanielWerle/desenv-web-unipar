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
                        alt="Imagem movimento esquerdo anti-horário" />

                    <p><b>L' </b> - Left / Esquerda anti-horário</p>
                </article>

                <article>
                    <img src="https://cubovelocidade.com.br//wp-content/uploads/2020/05/movimento-cubo-magico-uh-2.png"
                        alt="Imagem movimento topo horário" />

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
    );
}

explain default Movimentos;