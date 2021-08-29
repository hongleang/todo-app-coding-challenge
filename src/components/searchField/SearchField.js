import React from "react";

const SearchField = ({onSearchTask}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search your task..."
        onChange={(event) => onSearchTask(event.target.value)}
        className="form-control py-2"
      />
    </>
  );
}

export default SearchField;
