import React, { useEffect, useState } from "react";
import Button from "./Button";

import axios from "axios";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await axios.get(
          `https://blog.epower.ng/wp-json/wp/v2/posts?per_page=6&offset=${offset}`
        );
        setData(data);
      } catch (error) {}
    };
    getBlogs();
  }, [offset]);

  const handleNext = () => {
    setOffset(offset + 6);
  };
  const handlePrevious = () => {
    setOffset(offset - 6);
  };

  return (
    <>
      <Header />
      <main>
        <div className="main__blog">
          {data.map((value, id) => {
            return <Card data={value} key={id} />;
          })}
        </div>
        <div className="main__paging">
          <Button name="Previous" onClick={handlePrevious} />
          <Button name="Next" onClick={handleNext} />
        </div>
      </main>
      <footer>
        <p>Copuright 2019</p>
      </footer>
    </>
  );
};

export default Home;
