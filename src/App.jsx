/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Hashtaurante from "./assets/hashtaurante.webp";
import { Navegacao } from "./componentes/Navegacao";
import { ItemCardapio } from "./componentes/ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, setPaginaSelecionada] = useState(0);
  return (
    <>
      <img src={Hashtaurante} className="capa" />
      <Navegacao setPaginaSelecionada={setPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map((item) => (
          <ItemCardapio
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}
