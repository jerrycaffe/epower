import React from "react";

const Card = ({ data }) => {
  return (
    <div className="main__blog__item">
      <div className="main__blog__item-header">
        <img
          src={data.featured_image_thumbnail}
          alt="header"
          className="main__blog__item-img"
        />
      </div>
      <div className="main__blog__item-footer">
        <p className="main__blog__item__footer-title">{data.title.rendered}</p>
        <div
          className="main__blog__item__body"
          dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
