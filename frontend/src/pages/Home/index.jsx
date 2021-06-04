import React from 'react'

import './styles.css'
import separator from '../../assets/images/separator.svg'
import homeImage from '../../assets/images/homeImage.png'


const Home = ()=> {
    return (
        <div className="section-1">
            <div className="container">
                <header>
                    <h2>SPIDER CODE</h2>
                    <nav>
                        <button >LOGIN</button>
                        <button >SE INSCREVA</button>    
                    </nav>
               </header>
                <main>
                    <section>
                        <h1>"Junte-se com mais de mil <br/> alunos e torne-se o melhor herói!"</h1>
                        <img src={separator}  alt=""/>
                        <p>Com grandes poderes <br/> vem grandes responsabilidades!</p>
                    </section>
                    <section>
                        <img src={homeImage} alt="Homem Aranha, Imagem da inicial" />
                    </section>
              </main>
            </div>
        </div>
    )
}

export default Home