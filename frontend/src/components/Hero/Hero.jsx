
import React, { useEffect, useState } from 'react'
import Stat from '../Stat/State';
import HeroData from '../../Data/HeroData';
import heroImages from "../../Data/HeroImages";


export default function Hero() {
    const [CurrentImage,setCurrentImage]= useState(0);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setCurrentImage((prev)=>(prev+1)% heroImages.length);
        },4000);
        return ()=> clearInterval(interval);
    },[]);

  return (
    <section
        id="home"
        className="hero"
        
      >
        <div className='hero-carousel'>
            {heroImages.map((image,index)=>(
                <div 
                    key={image}
                    className={`hero-slide 
                        ${index=== CurrentImage ?"active":""}
                        `}
                        style={{
                            backgroundImage: `url(${image})`
                        }}
                />
            ))}
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="school-tag">
              CBSE AFFILIATED SCHOOL
            </div>

            <h1>
              Where Curiosity
              <br />
              Meets <span>Excellence.</span>
            </h1>

            <p>
              Building knowledge, character and confidence
              <br />
              for a brighter tomorrow.
            </p>

            <div className="hero-buttons">
              <a href="#about" className="btn btn-yellow">
                Explore Our School <span>→</span>
              </a>

              <a href="#admissions" className="btn btn-outline">
                Admission 2026–27
              </a>
            </div>

          </div>


          {/* HERO STATS */}

          <div className="hero-stats">
            
            {
                HeroData.map((item)=>(
                    <Stat 
                        icon={item.icon}
                        number={item.number}
                        label={item.label}
                    
                    />
                ))
            }
            
          </div>

        </div>

        <div className="hero-slogan">
          More Than
          <br />
          <span>Just A School.</span>
        </div>

      </section>
    
  )
}
