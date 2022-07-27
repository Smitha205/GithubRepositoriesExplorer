import React, { useState } from "react";

import UserRepoDetails from "../../components/UserRepoDetails/UserRepoDetails";
import { getUserDetails } from "../../services";
import "./SearchPage.css";

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState([]);
  const [toggleDiv, setToggleDiv] = useState(false);

  const handleChange = (e) => {
    setToggleDiv(false);
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setToggleDiv(true);
    getUserDetails(searchValue, 1, 5)
      .then((res) => {
        setUserData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="search-page-main">
      <form
        data-testid="search-form-testid"
        className="search-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter username"
          name="search-vaue"
          value={searchValue}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button
          data-testid="search-button-testid"
          className="search-button"
          type="submit"
          disabled={!searchValue}
        >
          Search
        </button>
      </form>
      <div className="search-value">
        {toggleDiv === true && userData.length > 0
          ? `Showing results for "${searchValue}"`
          : toggleDiv === true
          ? `No results for "${searchValue}"`
          : ""}
      </div>
      {userData.length === 0
        ? ""
        : userData.map((item, key) => (
            <UserRepoDetails key={key} repoUserInfo={item} />
          ))}
    </div>
  );
}
