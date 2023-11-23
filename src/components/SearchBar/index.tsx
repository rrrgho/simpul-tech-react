import React from "react";
import { Wrapper } from "./searchbar.style";
import SearchDark from "../../assets/icons/search-dark.svg";

const SearchBar = () => {
  return (
    <Wrapper>
      <div className="row justify-content-around">
        <div className="col-4">
          <span>Search</span>
        </div>
        <div className="col-4 text-end">
          <img style={{ width: 20 }} src={SearchDark} alt="Search Icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchBar;
