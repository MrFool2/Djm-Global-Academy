
import React, { useEffect, useState } from 'react'
import Stat from '../Stat/State';
import HeroData from '../../Data/HeroData';
import heroImages from "../../Data/HeroImages";
import { NavLink } from 'react-router-dom';
import HeroContainer from './HeroContainer';


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
           <HeroContainer
                tag="CBSE AFFILIATED SCHOOL"
                title={
                  <>
                    Where Curiosity
                    <br />
                    Meets <span>Excellence.</span>
                  </>
                }
                text={
                  <>
                    Building knowledge, character and confidence
                    <br />
                    for a brighter tomorrow.
                  </>
                }
                buttons={[
                  {
                    link: "/about",
                    classname: "btn btn-yellow",
                    text: (
                      <>
                        Explore Our School <span>→</span>
                      </>
                    ),
                  },
                  {
                    link: "/admissions",
                    classname: "btn btn-outline",
                    text: "Admission 2026–27",
                  },
                ]}
              />
          


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
