import React, { useContext } from "react";
import ProductLists from "../components/allProducts/ProductLists";
import Favorite from "../components/favorite/FavoriteCart";
import FavoritesContext from "../context/favorite-context";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);
  console.log("favoritesCtx", favoritesCtx.favorites);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You did not push your product to cart yet</p>;
  } else {
    content = <ProductLists product={favoritesCtx.favorites} />;
    // content = <Favorite product={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h1>My cart</h1>
      {content}
    </div>
  );
}

export default Favorites;
