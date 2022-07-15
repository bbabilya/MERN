import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Result = async (resource, id) => {
  const response = await axios.get(`https://swapi.dev/api/${resource}/${id}`);
  return response.data;
};

const ResultInfo = () => {
  const { resource, id } = useParams();
  const [result, setResult] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // setResult(null);
    Result(resource, id)
      .then((response) => {
        setResult(response);
        console.log(response);
      })
      .catch(() => navigate("/404"));
  }, [resource, id, navigate]);

  return (
    <>
      {resource === "films" ? (
        <>
          <h1>{result.title}</h1>
          <p>{result.opening_crawl}</p>
          <p>Director: {result.director}</p>
          <p>Producer: {result.producer}</p>
          <p>Release Date: {result.release_date}</p>
        </>
      ) : resource === "people" ? (
        <>
          <h1>{result.name}</h1>
          <p>Birth Year: {result.birth_year}</p>
          <p>Gender: {result.gender}</p>
          <p>Eye Color: {result.eye_color}</p>
          <p>Hair Color: {result.hair_color}</p>
        </>
      ) : resource === "planets" ? (
        <>
          <h1>{result.name}</h1>
          <p>Rotation Period: {result.rotation_period}</p>
          <p>Orbital Period: {result.orbital_period}</p>
          <p>Diameter: {result.diameter}</p>
          <p>Climate: {result.climate}</p>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ResultInfo;
