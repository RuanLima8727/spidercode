import React from 'react'

import './styles.css'
import separator from '../../assets/images/separator.png'
import homeImage from '../../assets/images/a.png'
// Courses
import phpCourse from '../../assets/images/courses/php.jpg'
import reduxCourse from '../../assets/images/courses/react-redux.png'
import flutterCourse from '../../assets/images/courses/flutter.png'
import courseCard from '../../assets/images/courseCard.png'

import Animation from '../../components/animation'
import CardCourse from '../../components/card-course'
import CategoryCard from '../../components/category-card'


const Home = ()=> {
    return (
        <>
        {/* <Animation/> */}
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
                    <CardCourse 
                        image={phpCourse} 
                        alt={"Elefante mascote do php"}>
                        Aprenda Back-End com PHP 7
                    </CardCourse>

                    <CardCourse 
                        image={reduxCourse} 
                        alt={"icones do react e redux"}>
                         Desenvolvimento Front-End <br/> com React e Redux
                    </CardCourse>

                    <CardCourse 
                        image={flutterCourse} 
                        alt={"icone do flutter"}>  
                        Torne-se um desenvolvedor<br/> mobile Com Flutter
                    </CardCourse> 

                </section>
                <button>
                    INSCREVA-SE
                </button>
                
            </div>
        </div>
        <div className="section-3">
            <div className="container">
                <h2>O que oferecemos para você!</h2>
                <section className="category-card-container">
                    <section>
                        <CategoryCard image={courseCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>

                        <CategoryCard image={courseCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>

                        <CategoryCard image={courseCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>
                    </section>
                    
                    <section>
                        <CategoryCard image={courseCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>

                        <CategoryCard image={courseCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>

                        <CategoryCard image={courseCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>
                    </section>
                </section>
            </div>
        </div>
    </>
    )
}

export default Home