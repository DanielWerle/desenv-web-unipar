import Peca from "../Peca";

function Pecas() {
    return (
        <section id="pecas">
            <h2>Nome de cada peça</h2>

            <div className="pecasContainer">
                <Peca
                    imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2xNem0UaiWtWXQJ2_isUsL9vnlqg19Zx5VEqGJGSNw&s=10"}
                    nome={"Centro"}
                    descricao={"São as 6 peças centrais do cubo. Elas são fixas e indicam a cor da face. Por exemplo, o centro amarelo indica que a face deverá ser toda amarela."}
                />

                <Peca
                    imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfgTUnBcvNkYbrfwbatBYd0Glex0vlwXYKUgkpxOqyA&s=10"}
                    nome={"Laterais"}
                    descricao={"O cubo possui 12 meios, que são as peças que têm 2 cores."}
                />

                <Peca
                    imagem={"https://cubovelocidade.com.br//wp-content/uploads/2020/05/pecas-cubo-magico-quinas-.png"}
                    nome={"Quinas"}
                    descricao={"Temos um total de 8 quinas, que são as peças que têm 3 cores e ficam nas pontas do cubo."}
                />
            </div>
        </section>
    );
}

export default Pecas;