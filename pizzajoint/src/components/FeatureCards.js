import React, { useState, useCallback } from "react";

const FeatureCard = ({ list }) => {
  const [image, setImage] = useState(list.image);

  const handleHover = useCallback(
    (itemImage) => {
      setImage(itemImage);
    },
    [setImage]
  );

  return (
    <div className="feature_card__container">
      <div className="feature_card__image">
        <img src={image} alt={"pizza"} />
      </div>
      <ul>
        {list.list.map((item) => (
          <li
            key={item.title}
            className="feature_card__contents"
            onMouseOver={() => handleHover(item.hoverSrc)}
            onMouseOut={() => handleHover(list.image)}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
