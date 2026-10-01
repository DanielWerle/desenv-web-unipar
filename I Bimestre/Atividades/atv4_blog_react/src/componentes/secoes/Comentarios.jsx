function Comentarios() {
    return (
        <section id="comentarios">
            <h2>Comentários</h2>

            <form>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" />
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" />
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
    );
}

export default Comentarios;