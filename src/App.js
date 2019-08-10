import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getGifs } from "./graphql/queries";

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    API.graphql(
      graphqlOperation(getGifs, { searchTerm: "got", limit: 2 })
    ).then(data => console.log(data));
  }, []);

  return (
    <header>
      <h1>Hello!</h1>
    </header>
  );
};

export default App;
