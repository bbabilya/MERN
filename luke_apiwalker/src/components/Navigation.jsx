import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import ResultInfo from "../views/Result";

const Navigation = () => {
  const [resource, setResource] = useState("people");
  const [id, setid] = useState(0);
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${resource}/${id}`);
  };

  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <div className="resource">
          Search for:
          <select
            name="resource-submit"
            value={resource}
            onChange={(e) => setResource(e.target.value)}
          >
            <option value="people" name="people" id="people">
              people
            </option>
            <option value="planets" name="planets" id="planets">
              planets
            </option>
            <option value="films" name="films" id="films">
              films
            </option>
          </select>
        </div>
        <div className="id">
          ID:
          <input
            type="number"
            name="id"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <Outlet />
    </div>
  );
};

export default Navigation;
