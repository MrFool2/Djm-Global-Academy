import JourneyData from "../../Data/JourneyData";
import JourneyCard from "./JourneyCard";
export default function Journey() {
  return (
    <section id="academics" className="journey">

        <div className="journey-heading">

          <div>
            <span className="eyebrow">
              THE ACADEMIC JOURNEY
            </span>

            <h2>
              From Foundation
              <br />
              <span>to Future Ready</span>
            </h2>
          </div>

        </div>


        <div className="journey-line">

            {
              JourneyData.map((item)=>(
                <JourneyCard 
                icon={item.icon}
                number={item.number}
                title={item.title}
                text={item.text}
                />
              ))
            }
          </div>
          
        

      </section>

  )
}