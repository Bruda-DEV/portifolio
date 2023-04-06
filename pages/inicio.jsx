import React from "react"
import json from "../public/json/data.json"
import projetos from "../public/json/projetos.json"

function Inicio(){
    const data = json.ptbr
    const linhas = data.body.sobre.carreira.split('\n')
    return(
        <div>
        <header>
            <h1>Larissa Bruda</h1>
        </header>
        <nav>
            <ul>
                <li> <a href="#sobre">{data.nav[0]}</a></li>
                <li> <a href="#projetos">{data.nav[1]}</a></li>
                <li> <a href="#parcerias">{data.nav[2]}</a></li>
            </ul>
        </nav>
        <section id="about">
            <h2>{data.body.sobre.titulo}</h2>
            {linhas.map((linhas,index)=> <p key={index}> {linhas} </p>)}
            <p></p>

        </section>
        <section id="portifolio">
            <h2>{data.body.projetos}</h2>
            <ul>
                <li><a href="#projeto1">{projetos.projeto1.nome} </a>
                <div className="carrossel">
                    <div className="container-imagens"> 
                    <img src= {projetos.projeto1.imagens[0]} alt="Imagem 2" />          
                    <img src= {projetos.projeto1.imagens[1]} alt="Imagem 2" />          
                    <img src= {projetos.projeto1.imagens[2]} alt="Imagem 3" />          
                    </div>
                </div>
                </li>
                <li><a href="#projeto2">{projetos.projeto2.nome}</a>

                <div className="container-imagens">
                    <img src= {projetos.projeto2.imagens[0]} alt="Imagem 1" />
                    <img src= {projetos.projeto2.imagens[1]} alt="Imagem 2" />
                    <img src= {projetos.projeto2.imagens[2]} alt="Imagem 3" />
                </div>
                </li>
            </ul>
        </section>
        <footer>
            <section id="contact">
                <h2> {data.body.contatos}</h2>
                <p><a href="mailto:brudalarissa@gmail.com">brudalarissa@gmail.com</a></p>
                <p></p>
            </section>
            <div className="direitos">
<p> {data.body.direitos} &copy; 2023</p>
            </div>
        </footer>
    </div>
    )
}
export default Inicio