import React from "react";
import { Carousel } from "./Carousel";
import Img1 from "../../Assests/Assests/poster1.png";
import Img2 from "../../Assests/Assests/poster2.png";
import "./ActivitiesCarousel.css";
const activities = [
  {
    image: Img1,
    title: "Class 10 Topper's ",
  },
  {
    image: Img2,
    title: "Last year's Topper's",
  },
  {
    image: Img1,
    title: "Cultural Programme",
  },
];


const ActivitiesCarousel = () => {
  return (

    <Carousel.Root
      opts={{
        loop: true,
        align: "start",
      }}
      className="activities-carousel"
    >

      <Carousel.Content>

        {activities.map(
          (activity, index) => (

            <Carousel.Item
              key={index}
              className="activity-slide"
            >

              <img
                src={activity.image}
                alt={activity.title}
              />

              <h3>
                {activity.title}
              </h3>

            </Carousel.Item>

          )
        )}

      </Carousel.Content>


      <div className="carousel-controls">

        <Carousel.PrevTrigger
          className="carousel-button"
        >
          ←
        </Carousel.PrevTrigger>


        <Carousel.NextTrigger
          className="carousel-button"
        >
          →
        </Carousel.NextTrigger>

      </div>


      <Carousel.IndicatorGroup
        className="carousel-indicators"
      >
        {({ index }) => (

          <Carousel.Indicator
            index={index}
            className={({ isSelected }) =>
              isSelected
                ? "carousel-dot active"
                : "carousel-dot"
            }
          />

        )}
      </Carousel.IndicatorGroup>

    </Carousel.Root>

  );
};

export default ActivitiesCarousel;