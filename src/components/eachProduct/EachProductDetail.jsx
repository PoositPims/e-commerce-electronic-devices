import React, { useContext } from "react";
import classes from "./EachProductDetail.module.css";
import FavoritesContext from "../../context/favorite-context";

function EachProductDetail({ name, description, price, _id, image }) {
  const favoritesCtx = useContext(FavoritesContext);
  console.log("favoritesCtx", favoritesCtx);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(_id);

  function addToFavorite() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(_id);
    } else {
      favoritesCtx.addFavorite({
        _id: _id,
        name: name,
        description: description,
        image: image,
      });
    }
  }

  return (
    <div className={classes.productDetail}>
      <div className={classes.name}>
        <b>{name}</b>
      </div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>
        <b>{price}</b>
      </div>
      <div className={classes.button}>
        <button
          className="btn rounded-pill text-white"
          style={{ backgroundColor: "#AA2A31", marginBottom: "50px" }}
          onClick={addToFavorite}
        >
          Add to card
        </button>
      </div>
    </div>
  );
}

export default EachProductDetail;
