import "./App.css";

import Header from "./componentes/layout/Header";
import Navigation from "./componentes/layout/Navigation";
import Article from "./componentes/tutorial/Article";
import Sidebar from "./componentes/layout/Sidebar";
import Footer from "./componentes/layout/Footer";

function App() {

  const props = {
    titulo: "Como Resolver o Cubo Mágico 3X3 | Método Básico",
    autor: "Daniel Werle",
    data: "05/09/2026",
    conteudo: "O método básico é a forma mais simples de se resolver o cubo mágico."
  };

  return (
    <>
      <Header />

      <Navigation />

      <main>
        <Article props={props} />

        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;