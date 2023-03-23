function Inicio(){
    return(
        <div>
        <header>
            <h1>Larissa Bruda</h1>
        </header>
        <nav>
            <ul>
                <li> <a href="#sobre">Sobre</a></li>
                <li> <a href="#projetos">Projetos</a></li>
                <li> <a href="#parecrias">Parcerias</a></li>
            </ul>
        </nav>
        <section id="about">
            <h2>Sobre mim</h2>
            <p>Sobre minha carreira</p>

        </section>
        <section id="portifolio">
            <h2>Portifólio</h2>
            <ul>
                <li><a href="#projeto1">Projeto 1</a>
                <div className="carrossel">
                    <div className="container-imagens"> 
                    <img src="../images/site1.png" alt="Imagem 1" />          
                    <img src="../images/site2.png" alt="Imagem 2" />          
                    <img src="../images/site3.png" alt="Imagem 3" />          
                    </div>
                </div>
                </li>
                <li><a href="#"></a></li>
            </ul>
        </section>
        <footer>
            <section id="contact">
                <h2> Contatos</h2>
                <p><a href="mailto:brudalarissa@gmail.com">brudalarissa@gmail.com</a></p>
                <p></p>
            </section>
        </footer>
    </div>
    )
}
export default Inicio