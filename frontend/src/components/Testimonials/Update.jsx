import { NavLink } from "react-router-dom";
import UpdateCard from "./UpdateCard";
import SchoolUpdates from "../../Data/SchoolUpdates";
export default function Update() {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let monthIndex = (new Date().getMonth());
  let monthName = monthNames[monthIndex];
  let Data=SchoolUpdates[monthName];

  return (
    
        <div id="updates" className="updates">

          <div className="update-heading">

            <span className="eyebrow">
              LATEST UPDATES
            </span>

            <NavLink to={"/contact"}>
              View All →
            </NavLink>

          </div>
            {
                Data.map((item)=>(
                    <UpdateCard 
                        type={item.type}
                        date={item.date}
                        title={item.title}
                    />
                ))

                
            }



        </div>
  )
}