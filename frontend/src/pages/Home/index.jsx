import React from 'react'

import './styles.css'
import separator from '../../assets/images/separator.png'
import homeImage from '../../assets/images/a.png'
// Courses
import phpCourse from '../../assets/images/courses/php.jpg'
import reduxCourse from '../../assets/images/courses/react-redux.png'
import flutterCourse from '../../assets/images/courses/flutter.png'
import backCard from '../../assets/images/backend.png'
import frontCard from '../../assets/images/frontend.png'
import barsSolid from '../../assets/images/bars-solid.svg'
import uRImage from '../../assets/images/userReviewImage.svg'
import githubImage from '../../assets/images/github-footer.svg'
import linkedinImage from '../../assets/images/linkedin-footer.svg'


import Animation from '../../components/animation'
import CardCourse from '../../components/card-course'
import CategoryCard from '../../components/category-card'
import CarouselItem from '../../components/carousel-items'


const Home = ()=> {
    return (
        <div className="teste">
        {/* <Animation/> */}
        <div className="section-1">
            <div className="box">
                <header>
                    <h2>SPIDER CODE</h2>
                    <nav>
                        <button >LOGIN</button>
                        <button >SE INSCREVA</button> 
                        <div>
                            <img src={barsSolid} alt="Menu hamburguer"/>    
                        </div>   
                    </nav>
               </header>
                <main>
                    <section>
                        <h1>Junte-se com mais de mil alunos!</h1>
                        <img src={separator}  alt=""/>
                        <p>Com grandes poderes <br/> vem grandes responsabilidades!</p>
                    </section>
                    <section>
                        <img src={homeImage} alt="Homem Aranha, Imagem da tela inicial" />
                    </section>
              </main>
            </div>
        </div>
        <div className="section-2">
            <div className="box">
                <h2>3 Cursos totalmente de graça!</h2>
                <p>Crie uma conta e receba 3 cursos gratuitamente!!</p>
                <section className="card-container">
                    <CardCourse 
                        image={phpCourse} 
                        alt={"Elefante mascote do php"}>
                        Aprenda Back-End com <br/> PHP 7
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
            <div className="box">
                <h2>O que oferecemos para você!</h2>
                <section className="category-card-container">
                    <section>
                        <CategoryCard image={backCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>

                        <CategoryCard image={backCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>

                        <CategoryCard image={backCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>
                    
                        <CategoryCard image={frontCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>

                        <CategoryCard image={frontCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>

                        <CategoryCard image={frontCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>
                    </section>
                </section>
            </div>
        </div>
        <div className="section-4">
            <div className="box">
                <h2>Depoimentos</h2>
                <CarouselItem image={uRImage} reviewName={"Joaquim"}
                    reviewText={ "Professor extremamente didático e com amplos conhecimentos e o curso tem conteúdo que permite exercitar o que é ensinado!"}/>
            </div>
        </div>
        <footer>
            <div className="box">
                <div className="link">
                    <a href="https://github.com/RuanLima8727">
                        <img src={githubImage} alt="Github do autor do site" />
                    </a>

                    <a href="https://www.linkedin.com/in/ruan-ribeiro/">
                        <img src={linkedinImage} alt="Linkedin do autor do site" />
                    </a>
                </div>
                
                <div className="copyright">
                    <p>&copy; Spider Code - Alguns direitos reservados -  {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Home