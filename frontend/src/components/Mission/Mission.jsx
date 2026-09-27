import MissionItem from "./MissionCard"
import MissionData from "../../Data/MissionData"
export default function Mission() {
  return (
    <div className="mission-card">

          {
            MissionData.map((item)=>(
                <MissionItem 
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                    route={item.route}
                />
            ))
          }

    </div>
  )
}