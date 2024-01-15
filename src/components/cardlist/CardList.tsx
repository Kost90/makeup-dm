"use client";
import Card from "./card/Card";
import { picturesArr } from "./card/CardData";
import { useEffect, useState } from "react";

const initialPictures = picturesArr.slice(0, 6);
const limit = 6;

function CardList() {
  const [length, setLength] = useState(0);
  const [pictures, setPictures] = useState(initialPictures);
  const [index, setIndex] = useState(5);
  const [showMore, setShowMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handelShowMore = () => {
    if (pictures.length === 6) {
      setLength(6);
      const newIndex = pictures.length + limit;
      setIndex(newIndex);
      setIsLoading(true);
    } else {
      setLength(index);
      const newIndex = index + limit;
      setIndex(newIndex);
      setIsLoading(true);
    }
  };

  console.log(pictures);

  useEffect(() => {
    if (index !== 5) {
      const newShowMore = index < picturesArr.length - 1;
      setShowMore(newShowMore);
      setPictures((prev) => [...prev, ...picturesArr.slice(length, index)]);
      setIsLoading(false);
    }
  }, [index]);

  return (
    <div className="grid gap-y-7 md:gap-y-16 gap-x-5 justify-center justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {isLoading === true ? <h1>Loading...</h1> : <Card pictures={pictures} />}
      {showMore && (
        <button
          type="button"
          onClick={handelShowMore}
          className="p-7 bg-dark-gray"
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default CardList;
