import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "./axios.js";
import ListItem from "./ListItem.js";
import Navbar from "./Navbar";

const totalEl = {
  people: 82,
  planets: 60,
  films: 6,
  species: 37,
  vehicles: 39,
  starships: 36,
};
function MainPage() {
  let data = useLocation();
  const [page, setPage] = useState("");
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    setPage(data.state.page);
  }, [data]);
  useEffect(() => {
    callApi();
  }, [page]);

  async function callApi() {
    if (page) {
      setApiData(null);
      try {
        let res = await axios.get(
          `/${page}/${Math.floor(Math.random() * totalEl[page]+ 1)}`
        );
        setApiData(res.data);
      } catch (err) {
        alert(err.message);
      }
    }
  }
  return (
    <div>
      <Navbar page={page}/>
      <div className="grid place-items-center bg-black h-max ">
        {apiData ? (
          <div className="grid place-items-center">
            <button
              type="button"
              onClick={() => callApi()}
              className="py-4 px-6 m-2  bg-[#FFE300] hover:bg-yellow-200 text-black  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              Random
            </button>
            <div className="bg-white max-w-2xl m-2 shadow overflow-hidden sm:rounded-lg">
              <div className="border-t  border-gray-200">
                <dl>
                  {Object.keys(apiData).map((key, index) => {
                    console.log(apiData[key]);
                    return (
                      <ListItem
                        index={index}
                        key={index}
                        value={apiData[key]}
                        heading={key}
                      />
                    );
                  })}
                </dl>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen grid place-items-center">
            <svg
              width="60"
              height="60"
              fill="white"
              className="mr-2 animate-spin"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
