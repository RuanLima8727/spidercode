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
import uRImage1 from '../../assets/images/userReviewImage1.svg'
import uRImage2 from '../../assets/images/userReviewImage2.svg'
import uRImage3 from '../../assets/images/userReviewImage3.svg'
import uRImage4 from '../../assets/images/userReviewImage4.svg'

import githubImage from '../../assets/images/github-footer.svg'
import linkedinImage from '../../assets/images/linkedin-footer.svg'
import arrowL from '../../assets/images/arrow-carrousel-l.svg'
import arrowR from '../../assets/images/arrow-carrousel-r.svg'
import dropdownLine from '../../assets/images/dropdown-line.png'
import cloud from '../../assets/images/cloud.png'
import database from '../../assets/images/database.png'
import linux from '../../assets/images/linux.png'
import uxui from '../../assets/images/ux-ui.png'


import Animation from '../../components/animation'
import CardCourse from '../../components/card-course'
import CategoryCard from '../../components/category-card'
import CarouselItem from '../../components/carousel-items'



const Home = ()=> {
    function horizontalScroll(e) {
        if (e.deltaY > 0) {
           e.target.scrollBy(300,0)
         }
         else {
           e.target.scrollBy(-300,0)
         }
      }
    var count = 0
    var i = 0
    function carrousselCounter(e) {
        if (count==0){
            setInterval(()=>{
                if (i<3) {
                    e.target.parentElement.parentElement.parentElement.parentElement.scrollBy(300,0)
                    i ++
                }
                else if (i<7) {
                    e.target.parentElement.parentElement.parentElement.parentElement.scrollBy(-300,0)
                    i ++
                    if (i == 6 ) {
                        i = 0
                    }
                }
            },5000);
            count= 1
        }
     }
    function scrollBtn(e) {

        if (e.target.className == "arrowR") {
            e.target.parentElement.children[1].scrollBy(300,0)
        }
        else {
            e.target.parentElement.children[1].scrollBy(-300,0)
        }
    }

    function onlyHorizontalScrollActive() {
        document.getElementsByTagName("body")[0].style = "overflow:hidden;"
    }
    function onlyHorizontalScrollDesactive() {
        document.getElementsByTagName("body")[0].style = "overflow:visible;"
    }
    var j = 0
    function dropdown(e) {
        
        
        if (j == 0) {
            e.target.parentElement.parentElement.parentElement.parentElement.children[1].style = "display:flex;"
            j = 1
        }
        else {
            e.target.parentElement.parentElement.parentElement.parentElement.children[1].style = "display:none;"
            j = 0
        }
    }

    return (
        <div>
        {/* <Animation/> */}
        <div className="section-1">
            <div className="box">
                <header>
                    <h2>SPIDER CODE</h2>
                    <nav>
                        <button >LOGIN</button>
                        <button >SE INSCREVA</button> 
                        <div className="mobile-menu" onClick={dropdown} >
                            <img src={barsSolid} alt="Menu hamburguer" />    
                        </div>
                    </nav>
               </header>
               <div className="dropdown-container">
                    <div className="dropdown">
                        <div className="dropdown-content">
                            <p className="dropdown-text">Login</p>
                            <img src={dropdownLine} alt="" className="dropdown-img" />
                            <p className="dropdown-text">Se Inscreva</p>
                        </div>
                    </div>
                </div>
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
                <h2>3 Cursos totalmente de gra??a!</h2>
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
                <h2>O que oferecemos para voc??!</h2>
                <section className="category-card-container">
                    <section>
                        <CategoryCard image={backCard} alt={"imagem do tipo de curso"}
                            category={"Back-End"} courseAmount={"22"}/>

                        <CategoryCard image={frontCard} alt={"imagem do tipo de curso"}
                            category={"Front-End"} courseAmount={"15"}/>

                        <CategoryCard image={cloud} alt={"imagem do tipo de curso"}
                            category={"Cloud"} courseAmount={"7"}/>
                    
                        <CategoryCard image={database} alt={"imagem do tipo de curso"}
                            category={"Database"} courseAmount={"3"}/>

                        <CategoryCard image={linux} alt={"imagem do tipo de curso"}
                            category={"Linux"} courseAmount={"5"}/>

                        <CategoryCard image={uxui} alt={"imagem do tipo de curso"}
                            category={"UX-UI"} courseAmount={"16"}/>
                    </section>
                </section>
            </div>
        </div>
        <div className="section-4">
            <div className="box">
                <h2>Depoimentos</h2>
                <div id="items-wrapper">
                <img src={arrowL} alt="" className="arrowL" onClick={scrollBtn}/>
                    <div id="items" onWheel={horizontalScroll} onMouseOver={onlyHorizontalScrollActive} onMouseOut={onlyHorizontalScrollDesactive} onLoad={carrousselCounter}> 
                        
                        <div className="item">
                            <div className="itemContainer">

                                <CarouselItem image={uRImage1} reviewName={"Joaquim"} 
                                    reviewText={ "Professor extremamente did??tico e com amplos conhecimentos e o curso tem conte??do que permite exercitar o que ?? ensinado!"}/>
                                    
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="itemContainer">

                                <CarouselItem image={uRImage2} reviewName={"Jos??"}
                                    reviewText={ "Conte??dos super relevantes e divertidos! N??o ?? chato ou pesado em momento nenhum."}/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="itemContainer">
                                <CarouselItem image={uRImage3} reviewName={"Andr??"}
                                    reviewText={ "O professor consegue explicar conte??dos complexos de maneira simples, super recomendo para quem tem dificuldade!"}/>
                                </div>

                        </div>
                        <div className="item">
                            <div className="itemContainer">
                                <CarouselItem image={uRImage4} reviewName={"Ant??nia"}
                                    reviewText={ "Conte??do atualizado e super relevante para as exig??ncias do mercado de trabalho!"}/>
                                </div>
                        </div>
                    </div>
                    <img src={arrowR} alt="" className="arrowR" onClick={scrollBtn} />
                </div>
            </div>
        </div>
        <footer>
            <div className="box" >
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