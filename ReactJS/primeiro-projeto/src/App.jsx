import React from "react";

import { Navbar } from "./components/Navbar/Navbar";
// import Navbar from "./components/Navbar/Navbar";

import "./styles/App.css"; //faz a importação do arquivo css
import { Article } from "./components/Article/Article";

import article1Img from "./assets/images/article1.png";
import article2Img from "./assets/images/article2.png";
import article3Img from "./assets/images/article3.png";
import { Counter } from "./components/Counter/counter";

// Componente em classe é uma classe que herda a
// classe Componente
// do React, e retorna HTML dentro do metodo render.

//fragment

class App extends React.Component {
  //Metodo responsavel por renderizar o conteudo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />

          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article2Img}
          />

          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article3Img}
          />

          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />
        </section>

        {/* <Counter /> */}
      </>
    );
  }
}

export default App;
