import React from "react";
import { FC, useState } from "react";

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({ onSearch }) => {
  const [locationSearch, setLocationSearch] = useState("");
  const [locations, setLocations] = useState([""]);
  const disableSearch = locationSearch.trim() === "";
  const addLocation = () => {
    onSearch(locationSearch);
    setLocations([locationSearch, ...locations]);
    setLocationSearch("");
  };

  return (
    <div>
      <label>
        Add Location{" "}
        <input
          className="m1-1 mr-1"
          type="text"
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
        />
      </label>
      <button
        className="btn btn-primary"
        onClick={addLocation}
        disabled={disableSearch}
      >
        Search
      </button>
    </div>
  );
};
