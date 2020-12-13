import React from "react";
import { useLocation } from "react-router-dom";
import "./Restaurant.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Restaurant = (props) => {
  let query = useQuery();
  const { id } = props.match.params;
  return (
    <div className="Restaurant">
      <header className="Restaurant-header">
        <p>{id}</p>
        <p>
          Edit <code>src/Restaurant.js</code> and save to reload.
        </p>
        <p>
          Test query param: {query.get("name") || "no/incorrect query param"}
        </p>
      </header>
    </div>
  );
};

export default Restaurant;
