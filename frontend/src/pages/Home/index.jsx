import React from 'react'

import './styles.css'
import separator from '../../assets/images/separator.png'
import homeImage from '../../assets/images/a.png'
// Courses
import phpCourse from '../../assets/images/courses/php.jpg'
import reduxCourse from '../../assets/images/courses/react-redux.png'
import flutterCourse from '../../assets/images/courses/flutter.png'

import Animation from '../../components/animation'


const Home = ()=> {
    return (
        <>
        <Animation/>
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
                        <h1>Junte-se com mais de mil alunos!</h1>
                        <img src={separator}  alt=""/>
                        <p>Com grandes poderes <br/> vem grandes responsabilidades!</p>
                    </section>
                    <section>
                        <img src={homeImage} alt="Homem Aranha, Imagem da inicial" />
                    </section>
              </main>
            </div>
        </div>
        <div className="section-2">
            <div className="container">
                <h2>3 Cursos totalmente de graça!</h2>
                <p>Crie uma conta e receba 3 cursos gratuitamente!!</p>
                <section className="card-container">
                    <article>
                        <img src={phpCourse} alt="Elefante mascote do php"></img>
                        <h4>Aprenda Back-End com PHP 7</h4>
                    </article>
                    <article>
                        <img src={reduxCourse} alt="Elefante mascote do php"></img>
                        <h4>Desenvolvimento Front-End<br/> com React e Redux</h4>
                    </article>
                    <article>
                        <img src={flutterCourse} alt="Elefante mascote do php"></img>
                        <h4>Torne-se um desenvolvedor<br/>mobile Com Flutter</h4>
                    </article>
                </section>
                <button>
                    INSCREVA-SE
                </button>
                
            </div>
        </div>
    </>
    )
}

export default Home