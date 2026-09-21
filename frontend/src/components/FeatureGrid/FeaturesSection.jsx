import React from "react"; 
import "./FeaturesSection.css"; 
import CornerPlus from "../CornerPlus/CornerPlus";
import features from "./FeatureGridData";
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
                            <CornerPlus />
                            
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