import React, { useState } from "react";
import "./Update.css";

import UpdateCard from "../Testimonials/UpdateCard";
import SchoolUpdates from "../../Data/SchoolUpdates";
import HeroOverlay from "../HeroOverlay/HeroOverlay";

const MONTHS = [
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
];

function getMonthStatus(month) {
  const currentCalendarMonth = new Date().getMonth();

  const academicOrder = {
    April: 0,
    May: 1,
    June: 2,
    July: 3,
    August: 4,
    September: 5,
    October: 6,
    November: 7,
    December: 8,
    January: 9,
    February: 10,
    March: 11,
  };

  let currentAcademicIndex;

  if (currentCalendarMonth >= 3) {
    currentAcademicIndex = currentCalendarMonth - 3;
  } else {
    currentAcademicIndex = currentCalendarMonth + 9;
  }

  const selectedAcademicIndex = academicOrder[month];

  if (selectedAcademicIndex < currentAcademicIndex) {
    return "past";
  }

  if (selectedAcademicIndex === currentAcademicIndex) {
    return "current";
  }

  return "future";
}

export default function Updates() {
  const [selectedMonth, setSelectedMonth] = useState("All");

  /*
    IMPORTANT:
    If "All" → show all months.
    If a month is selected → show ONLY that month.
  */

  const monthsToDisplay =
    selectedMonth === "All"
      ? MONTHS
      : [selectedMonth];

  return (
      
      <section className="updates-container">

        {/* HEADING */}

        <div className="updates-heading">

          <div>
            <span className="section-label">
              ACADEMIC CALENDAR
            </span>

            <h2>
              What's happening at school?
            </h2>
          </div>


          {/* LEGEND */}

          <div className="update-legend">

            <div>
              <span className="legend-dot current-dot"></span>
              Current
            </div>

            <div>
              <span className="legend-dot past-dot"></span>
              Past
            </div>

            <div>
              <span className="legend-dot future-dot"></span>
              Upcoming
            </div>

          </div>

        </div>


        {/* =========================
            MONTH FILTER
        ========================= */}

        <div className="month-filter">

          <button
            type="button"
            className={
              selectedMonth === "All"
                ? "active"
                : ""
            }
            onClick={() => setSelectedMonth("All")}
          >
            All
          </button>


          {MONTHS.map((month) => (

            <button
              type="button"
              key={month}
              className={
                selectedMonth === month
                  ? "active"
                  : ""
              }
              onClick={() => setSelectedMonth(month)}
            >
              {month.slice(0, 3)}
            </button>

          ))}

        </div>


        {/* =========================
            UPDATE LIST
        ========================= */}

        <div className="updates-list">

          {monthsToDisplay.map((month) => {

            const status = getMonthStatus(month);

            /*
              Get events for this month
            */
            const events = SchoolUpdates[month] || [];

            return (

              <section
                className={`month-group ${status}`}
                key={month}
              >

                {/* =========================
                    MONTH HEADER
                ========================= */}

                <div className="month-header">

                  <div className="month-title">

                    <span className="month-status-dot"></span>

                    <h3>
                      {month}
                    </h3>

                  </div>


                  <span className="month-status">

                    {status === "current" && "CURRENT"}

                    {status === "past" && "COMPLETED"}

                    {status === "future" && "UPCOMING"}

                  </span>

                </div>


                {/* =========================
                    EVENTS
                ========================= */}

                <div className="month-events">

                  {events.map((item, index) => (

                    <div
                      className="event-row"
                      key={`${month}-${index}`}
                    >

                      {/* DATE */}

                      <div className="event-date">

                        <span>
                          {item.date}
                        </span>

                      </div>


                      {/* CARD */}

                      <div className="event-card-wrapper">

                        <UpdateCard
                          type={item.type}
                          date={item.date}
                          title={item.title}
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </section>

            );

          })}

        </div>

      </section>

  
  );
}