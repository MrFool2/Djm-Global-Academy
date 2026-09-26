import TrustBarData from "../../Data/TrustBarData"
import TrustItem from "./TrustItem"

export default function TrustBar() {
  return (
     <section className="trust-bar">
        {
            TrustBarData.map((item)=>(
                <TrustItem 
                    icon={item.icon}
                    number={item.number}
                    text={item.text}
                />
            ))
        }
      </section>
  )
}