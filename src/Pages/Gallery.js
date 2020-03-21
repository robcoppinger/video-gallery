import React from "react";
import VideoList from "../data/VideoList.json";
import { VideoCard } from "../Components/VideoCard.js";

export const Gallery = () => {
  const [filteredNames, setFilteredNames] = React.useState({});
  const [showFilter, setShowFilter] = React.useState(false);

  React.useEffect(() => {
    const names = VideoList.map(video => {
      return video.featuring.concat(video.starring);
    })
      .flat() //flatten to one array
      .filter((value, index, self) => self.indexOf(value) === index) //unique
      .sort(); //sorted

    const filter = {};
    for (var name of names) {
      filter[name] = false;
    }

    setFilteredNames(filter);
  }, []);

  const filterVideos = () => {
    const filteredArray = Object.keys(filteredNames).filter(
      name => filteredNames[name] === true
    );
    if (filteredArray.length === 0) return VideoList;
    return VideoList.filter(video => {
      const names = video.starring.concat(video.featuring);
      const intersection = names.filter(name => filteredArray.includes(name));
      return intersection.length > 0;
    });
  };

  const handleChange = e => {
    setFilteredNames({ ...filteredNames, [e.target.name]: e.target.checked });
  };

  return (
    <div className="gallery">
      <img
        alt="filter"
        className="filterImg"
        src={require("../images/filter.png")}
        onClick={() => setShowFilter(true)}
      />
      <div className="contentContainer">
        <div className="videoContentContainer">
          {filterVideos().map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>

      <div className="sidePanel" data-visible={showFilter}>
        <div className="sidepanelHeader">
          <h3>Filter by people</h3>
          <img
            src={require("../images/close.png")}
            alt="close"
            onClick={() => setShowFilter(false)}
          />
        </div>

        <form>
          {Object.keys(filteredNames).map(name => (
            <label key={name}>
              <input
                type="checkbox"
                name={name}
                onChange={handleChange}
                checked={filteredNames[name]}
              />
              &nbsp; {name} <br />
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};
