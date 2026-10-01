function Pecas() {
    return (
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
    );
}

export default Pecas;