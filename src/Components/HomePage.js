import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="font-['Arial'] grid place-items-center h-screen bg-black">
      <div className="flex flex-col w-full md:w-2/4">
        {/* <div className="grid place-items-center mb-12">
          <h1 className="text-6xl">Contacts App</h1>
        </div> */}
        <div className="shadow-lg  rounded-xl bg-white dark:bg-gray-800  overflow-hidden">
          <Link to="/page" state={{ page: "films" }}>
            <div className="flex text-xl justify-center  rounded  p-3 bg-[#FFE300] hover:bg-yellow-200 ">
              {/* <span className="rounded-lg p-2 bg-white">
                <TheatersIcon />
              </span> */}
              <div className="flex  ml-2 items-center justify-between">
                <p>Films</p>
              </div>
            </div>
          </Link>
          <Link to="/page" state={{ page: "people" }}>
            <div className="flex text-2xl justify-center  rounded p-3 bg-[#FFE300] hover:bg-yellow-200 ">
              {/* <span className="rounded-lg p-2 bg-white">
                <PeopleIcon />
              </span> */}
              <div className="flex  ml-2 items-center justify-between">
                <p>People</p>
              </div>
            </div>
          </Link>
          <Link to="/page" state={{ page: "planets" }}>
            <div className="flex text-3xl justify-center rounded  p-3 bg-[#FFE300] hover:bg-yellow-200 ">
              {/* <span className="rounded-lg p-2 bg-white">
                <PublicIcon />
              </span> */}
              <div className="flex  ml-2 items-center justify-between">
                <p>Planets</p>
              </div>
            </div>
          </Link>

          <Link to="/page" state={{ page: "species" }}>
            <div className="flex text-5xl justify-center rounded  p-3 bg-[#FFE300] hover:bg-yellow-200 ">
              {/* <span className="rounded-lg p-2 bg-white">
                <BugReportIcon />
              </span> */}
              <div className="flex  ml-2 items-center justify-between">
                <p>Species</p>
              </div>
            </div>
          </Link>
          <Link to="/page" state={{ page: "vehicles" }}>
            <div className="flex text-6xl justify-center  rounded  p-3 bg-[#FFE300] hover:bg-yellow-200 ">
              {/* <span className="rounded-lg p-2 bg-white">
                <AirportShuttleIcon />
              </span> */}
              <div className="flex  ml-2 items-center justify-between">
                <p>Vehicles</p>
              </div>
            </div>
          </Link>
          <Link to="/page" state={{ page: "starships" }}>
            <div className="flex text-7xl justify-center rounded  p-3 bg-[#FFE300] hover:bg-yellow-200 ">
              {/* <span className="rounded-lg p-2 bg-white">
                <RocketIcon />
              </span> */}
              <div className="flex ml-2 items-center justify-between">
                <p>Starships</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
