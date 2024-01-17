"use client";
import Card from "./card/Card";
import { picturesArr } from "./card/CardData";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import styles from "./CardList.module.css";

const initialPictures = picturesArr.slice(0, 6);
const limit = 6;

function CardList() {
  const [length, setLength] = useState(0);
  const [pictures, setPictures] = useState(initialPictures);
  const [index, setIndex] = useState(5);
  const [showMore, setShowMore] = useState(true);

  const handelShowMore = () => {
    if (pictures.length === 6) {
      setLength(6);
      const newIndex = pictures.length + limit;
      setIndex(newIndex);
    } else {
      setLength(index);
      const newIndex = index + limit;
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    if (index !== 5) {
      const newShowMore = index < picturesArr.length - 1;
      setShowMore(newShowMore);
      setPictures((prev) => [...prev, ...picturesArr.slice(length, index)]);
    }
  }, [index]);

  return (
    <>
      <div className="grid gap-y-7 md:gap-y-16 gap-x-5 justify-center justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-7 md:pb-16">
        <Card pictures={pictures} />
      </div>
      {showMore && (
        <Button
          type="button"
          onClick={handelShowMore}
          className={styles.button_load}
          text="Load more"
        />
      )}
    </>
  );
}

export default CardList;
