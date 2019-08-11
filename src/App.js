import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getGifs } from "./graphql/queries";
import GifList from "./GifList";
import AppStyles from "./app-styles.module.css";

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    API.graphql(
      graphqlOperation(getGifs, { searchTerm: "lets do this", limit: 1 })
    ).then(({ data: { getGifs } }) => setGifs(getGifs));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    API.graphql(
      graphqlOperation(getGifs, { searchTerm: searchTerm, limit: 4 })
    ).then(({ data: { getGifs } }) => setGifs(getGifs));
  };

  return (
    <main className={AppStyles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button>Search Gifs</button>
      </form>
      <GifList gifs={gifs} />
    </main>
  );
};

export default App;
