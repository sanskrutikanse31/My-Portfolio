import React from "react";
import { useNavigate } from "react-router-dom"; //for button
import './styles.scss';



const Home =()=>{
    
    const navigate =useNavigate();
   

    const handleNavigateToContactMePage =()=> {
        navigate("/contact");
    };
    return(
       
            <section id="home" className="home">
                <div className="home__image">
                {/* <img src="https://img.theweek.in/content/dam/week/news/sports/images/2022/3/29/ellyse-perry-australia-womens-world-cup.jpg "/> */}
                </div>
                <div className="home__text-wrapper">
                 <h1>
                 Hello, I'm Sanskruti.
                 <br/>
                 Front end developer
                 </h1>
                
                </div>
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire Me</button>

                </div>
              
            </section>

          
       
    )
}
export default Home;