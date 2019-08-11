import React from "react";
import GifStyles from "./gif-styles.module.css";

const GifList = ({ gifs }) => {
  return (
    <section className={GifStyles.container}>
      {gifs.map(gif => (
        <img
          key={gif.id}
          className={GifStyles.gifItem}
          src={gif.images.original.url}
          alt={gif.slug}
        />
      ))}
    </section>
  );
};

export default GifList;
