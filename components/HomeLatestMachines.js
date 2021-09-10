import React, { useState, useEffect } from "react";
import MachinePreview from "./MachinePreview";
import Link from "next/link";

export default function HomeLatestMachines({ machines }) {
  const [latestMachines, setLatestMachines] = useState([]);

  useEffect(() => {
    machines.sort((a, b) => b.id - a.id);
    setLatestMachines(machines.slice(0, 5));
  }, [machines]);

  function addSlide(machines) {
    for (let i = 1; i < machines.length(); i++) {
      return (
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={i}
          aria-label={i + 1}
        ></button>
      );
    }
  }

  function renderMachinePreviews() {
    return latestMachines.map((machine) => {
      return (
        <MachinePreview
          machine={machine}
          length={latestMachines.length}
          key={machine.id}
        />
      );
    });
    // for (let i = 1; i < latestMachines.length; i++) {
    //   return (
    //     <MachinePreview
    //       machine={latestMachines[i]}
    //       key={latestMachines[i].id}
    //     />
    //   );
    // }
  }

  return (
    <>
      <div id="latestMachines" className="carouselContainer">
        <h1>Latest Machines</h1>
        <div
          id="carouselExampleIndicators"
          data-bs-ride="carousel"
          className="carousel slide carousel-fade"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            {addSlide()}
            {/* <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button> */}
          </div>
          <div className="carousel-inner" id="carousel">
            {/* <div className="carousel-item active">
              <Link href={`/machines/${machines[0].id}`}>
                <a target="_blank">
                  <img
                    src={machines[0].cover.url}
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </Link>
            </div> */}
            {renderMachinePreviews()}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
