import { useState } from "react";
import MovieRender from "../components/MovieRender";
import { TabType } from "../types/types";
import { movieData, tabData } from "../data/data";

const Tabss = () => {
  const [activeTab, setActiveTab] = useState<TabType>(tabData[0]);

  const findMovie = () => {
    const currentMovie = movieData.find((movie) => {
      return activeTab.id === movie.id;
    });

    return currentMovie;
  };

  return (
    <>
      <div className="tabss">
        {tabData.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`tabss__item ${
                tab.id === activeTab.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <div className="tabss__content">
        <MovieRender movie={findMovie()} />
      </div>
    </>
  );
};
export default Tabss;
