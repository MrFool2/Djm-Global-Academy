import Masonry from "../components/Acativity/MasonryGallery";
import "./Activity.css";

const items= [
   { id:"1",
      
    img: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=400&q=80",
    size: "1600-1067",
    height: 400,
  },
   { id:"2",
    img: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?auto=format&fit=crop&w=400&q=80",
    size: "1600-2400",
    height: 800,
  },
   { id:"3",
    img: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1605973029521-8154da591bd7?auto=format&fit=crop&w=400&q=80",
    size: "1600-2400",
    height: 800,
  },
   { id:"4",
    img: "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?auto=format&fit=crop&w=400&q=80",
    size: "1600-2398",
    height: 400,
  },
   { id:"5",
    img: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=400&q=80",
    size: "1600-1067",
    height: 400,
  },
   { id:"6",
    img: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?auto=format&fit=crop&w=400&q=80",
    size: "1600-1067",
    height: 400,
  },
   { id:"7",
    img: "https://images.unsplash.com/photo-1477322524744-0eece9e79640?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?auto=format&fit=crop&w=400&q=80",
    size: "1600-1126",
    height: 400,
  },
   { id:"8",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80",
    size: "1600-1063",
    height: 400,
  },
   { id:"9",
    img: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=400&q=80",
    size: "1600-2400",
    height: 800,      
  },
   { id:"10",
    img: "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?auto=format&fit=crop&w=400&q=80",
    size: "1600-1144",
    height: 400,
  },
   { id:"11",
    img: "https://images.unsplash.com/photo-1465311530779-5241f5a29892?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1465311530779-5241f5a29892?auto=format&fit=crop&w=400&q=80",
    size: "1600-1067",
    height: 400,
  },
   { id:"12",
    img: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?auto=format&fit=crop&w=400&q=80",
    size: "1600-1067",
    height: 400,
  },
   { id:"13",
    img: "https://images.unsplash.com/photo-1610448721566-47369c768e70?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1610448721566-47369c768e70?auto=format&fit=crop&w=400&q=80",
    size: "1600-2400",
    height: 800,
  },
   { id:"14",
    img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=400&q=80",
    size: "1600-1067",
    height: 400,
  },
   { id:"15",
    img: "https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?auto=format&fit=crop&w=400&q=80",
    size: "1600-2400",
    height: 800,
  },
   { id:"16",
    img: "https://images.unsplash.com/photo-1446630073557-fca43d580fbe?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1446630073557-fca43d580fbe?auto=format&fit=crop&w=400&q=80",
    size: "1600-2400",
    height: 800,
  },
   { id:"17",
    img: "https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?auto=format&fit=crop&w=400&q=80",
    size: "1600-1065",
    height: 400,
  },
   { id:"18",
    img: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?auto=format&fit=crop&w=400&q=80",
    size: "1600-2134",
    height: 800,
  },
   { id:"19",
    img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=400&q=80",
    size: "1600-1060",
    height: 400,
  },
   { id:"20",
    img: "https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?auto=format&fit=crop&w=400&q=80",
    size: "1600-1037",
    height: 400,
  },
   { id:"21",
    img: "https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?auto=format&fit=crop&w=400&q=80",
    size: "1600-899",
    height: 400,
  },
   { id:"22",
    img: "https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?auto=format&fit=crop&w=400&q=80",
    size: "1600-1067",
    height: 400,
  },
   { id:"23",
    img: "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?auto=format&fit=crop&w=1600&q=80",
    url:
      "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?auto=format&fit=crop&w=400&q=80",
    size: "1536-2304",
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