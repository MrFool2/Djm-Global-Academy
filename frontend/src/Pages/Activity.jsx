import Masonry from "../components/Acativity/MasonryGallery";
import "./Activity.css";
import img1 from "../Assests/Gallery/Class10/Djm Global Academy (5).png";
import img2 from "../Assests/Gallery/Class10/DJM Global Academy (6).png";
import img3 from "../Assests/Gallery/Class10/Class10Toppers8.png";
import img4 from "../Assests/Gallery/Class10/JnvSelected.jpeg";
import img5 from "../Assests/Gallery/Class10/Tooper2025.png";
import img6 from "../Assests/Gallery/Class10/Class10Toppers.jpeg";
import img7 from "../Assests/Gallery/Class10/ToppersImg.jpeg";
import img8 from "../Assests/Gallery/StaffImg/StaffImg1.jpeg";
import img9 from "../Assests/Gallery/StaffImg/StaffImg2.jpeg";
import img10 from "../Assests/Gallery/StaffImg/StaffImg3.jpeg";
import img11 from "../Assests/Gallery/StaffImg/StaffImg4.jpeg";
import img12 from "../Assests/Gallery/StaffImg/StaffImg5.jpeg";
import img13 from "../Assests/Gallery/StaffImg/StaffImg1.jpeg";
import img14 from "../Assests/Gallery/Toppers/TopperImg4.jpeg";
import img15 from "../Assests/Gallery/Toppers/TopperImg5.jpeg";
import img16 from "../Assests/Gallery/Toppers/ToppersImg8.jpeg";
import img17 from "../Assests/Gallery/Toppers/WhatsApp Image 2026-09-22 at 5.36.15 PM.jpeg";
import img18 from "../Assests/Gallery/Toppers/ToppersImg9.jpeg";
import img19 from "../Assests/Gallery/Toppers/ToppersImg1.jpeg";
import img20 from "../Assests/Gallery/LabImg/LabImg1.jpeg";
import img21 from "../Assests/Gallery/BuildingImg/SchoolBuilding.jpeg";
import img22 from "../Assests/Gallery/BuildingImg/SchoolBuildingImg7.png";

const items= [
   { id:"1",
      
    img: img2,
    url: img2,
    size: "1600-1067",
    height: 1300,
  },
   { id:"2",
    img:img1 , 
    url: img1,
    size: "1800-2400",
    height: 200,
  },
   { id:"3",
    img: img3,    
    url: img3,
    size: "1600-2400",
    height: 1300,
  },
   { id:"4",
    img:  img8 ,
    url:  img8,
    size: "1600-2398",
    height: 400,
  },
   { id:"5",
    img:  img7   ,
    url: img7,
    size: "1600-1067",
    height: 1000,
  },
   { id:"6",
    img: img6,
    url: img6,
    size: "1600-1067",
    height: 600,
  },
   { id:"7",
    img: img4,
    url: img4,
    size: "1600-1126",
    height: 800,
  },
   { id:"8",
    img: img10,
    url: img10,
    size: "1600-1063",
    height: 300,
  },
   { id:"9",
    img:  img11,
    url: img11,
    size: "1600-2400",
    height: 800,      
  },
   { id:"10",
    img: img12,
    url: img12,
    size: "1600-1144",
    height: 400,
  },
   { id:"11",
    img: img5,
    url: img5,
    height: 1300,
  },
   { id:"12",
    img: img9,
    url: img9,
    size: "1600-1067",
    height: 400,
  },
   { id:"13",
    img:  img13,
    url: img13,
    size: "1600-2400",
    height: 800,
  },
   { id:"14",
    img: img14,
    url: img14,
    size: "1600-1067",
    height: 400,
  },
   { id:"15",
    img: img15,
    url: img15,
    size: "1600-2400",
    height: 800,
  },
   { id:"16",
    img:  img16,
    url: img16,
    size: "1600-2400",
    height: 800,
  },
   { id:"17",
    img: img17,
    url: img17,
    height: 400,
  },
   { id:"18",
    img: img18,
    url: img18,
    size: "1600-2134",
    height: 800,
  },
   { id:"19",
    img: img19,
    url: img19,
    size: "1600-1060",
    height: 400,
  },
   { id:"20",
    img: img20,
    url: img20,
    size: "1600-1037",
    height: 400,
  },
   { id:"21",
    img: img21,
    url: img21,
    size: "1600-899",
    height: 400,
  },
   { id:"22",
    img: img22,
    url:img22,
    size: "1600-1067",
    height: 400,
  },

];

function Activity()  { 

  return (

    <div className="Activity">
      <div className="Activity-gallery">
          <Masonry
            items= { items}
            ease="power3.out"
            duration= { 0.6}
            stagger= { 0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale= { 0.95}
            blurToFocus
            colorShiftOnHover= {false}
            />

          </div>
    </div>
  );
}

export default Activity;