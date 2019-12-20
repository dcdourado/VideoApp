import React, { useState } from "react";

const SearchBar = props => {
  const [term, setTerm] = useState("");

  const onInputChange = event => setTerm(event.target.value);
  const onFormSubmit = event => {
    event.preventDefault();
    //CALLBACK FROM PARENT COMPONENT
    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="searchbar">Video Search</label>
          <input
            id="searchbar"
            type="text"
            name=""
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
