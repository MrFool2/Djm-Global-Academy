import React from "react"; 
import "./FeaturesSection.css"; 
const features = [ 
    { 
        title: "Academic Excellence", 
        description: "Strong foundations, experienced teachers, and a learning environment that encourages every student to achieve their potential.", 
        icon: ( 
            <svg viewBox="0 0 24 24" fill="none"> 
                <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
                <path d="M7 10V16C7 18.2 9.2 20 12 20C14.8 20 17 18.2 17 16V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> 
                <path d="M21 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> 
            </svg> 
        ), 
    }, 
    { 
        title: "Modern Learning", 
        description: "Smart classrooms, computer and science labs, and practical learning experiences that connect knowledge with the real world.", 
        icon: ( 
            <svg viewBox="0 0 24 24" fill="none"> 
                <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" /> 
                <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> 
                <path d="M12 17V21" stroke="currentColor" strokeWidth="1.5" /> 
            </svg> 
        ), 
    }, 
    {
        title: "Holistic Development", 
        description: "A balanced approach to academics, sports, creativity, discipline, confidence, and character development.", 
        icon: ( 
            <svg viewBox="0 0 24 24" fill="none"> 
                <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" /> 
                <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
            </svg> 
        ), 
    }, 
    { 
        title: "Proven Results", 
        description: "Celebrating consistent academic achievements and helping students build the confidence to pursue their goals.", 
        icon: ( 
            <svg viewBox="0 0 24 24" fill="none"> 
                <path d="M4 19V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> 
                <path d="M10 19V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> 
                <path d="M16 19V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> 
                <path d="M22 19V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> 
            </svg> 
        ), 
    }, 
    { 
        title: "Sports & Activities", 
        description: "Encouraging students to discover their interests, develop teamwork, and stay active through sports and extracurricular activities.", 
        icon: ( 
            <svg viewBox="0 0 24 24" fill="none"> 
                <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" /> 
                <path d="M12 3.5V20.5" stroke="currentColor" strokeWidth="1.5" /> 
                <path d="M3.5 12H20.5" stroke="currentColor" strokeWidth="1.5" /> 
            </svg>
        ), 
    }, 
    { 
        title: "Safe & Supportive Environment", 
        description: "A disciplined, caring, and welcoming campus where students can learn with confidence and grow into responsible individuals.", 
        icon: ( 
            <svg viewBox="0 0 24 24" fill="none"> 
                <path d="M12 3L20 6V11C20 16.2 16.7 20 12 21C7.3 20 4 16.2 4 11V6L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
                <path d="M8.5 12L11 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
            </svg> 
        ), 
    }, 
]; 
const FeaturesSection = () => {
     return ( 
        <section className="features-section"> 
            <div className="features-container">
             {/* Section Heading */} 
                <div className="features-heading"> 
                    <h2>Everything Your Child Needs to Thrive</h2> 
                    <p> From strong academics to creativity, sports, and character building — we provide an environment where students can learn, grow, and succeed. </p> 
                </div> 
                {/* Feature Grid */} 
                <div className="features-grid">
                    {features.map((feature, index) => ( 
                        <div className="feature-card" key={index}> 
                        {/* Subtle glow */} 
                            <div className="feature-card-glow" /> 
                            {/* Border */} 
                            <div className="feature-border feature-border-left" /> 
                            <div className="feature-border feature-border-right" />
                            <div className="feature-border feature-border-top" /> 
                            <div className="feature-border feature-border-bottom" /> 
                            {/* Corner plus */} 
                            <div className="corner-plus"> 
                                <span /> <span /> 
                            </div> 
                            {/* Icon */} 
                            <div className="feature-icon"> 
                                {feature.icon} 
                            </div> 
                            {/* Text */} 
                            <div className="feature-content">
                                <h3>{feature.title}</h3> 
                                <p>{feature.description}</p> 
                            </div> 
                        </div> 
                    ))} 
                </div> 
            </div> 
        </section> 
    ); 
}; 
        
export default FeaturesSection;