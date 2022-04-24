import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import classes from "./MenuTypeProd.module.css";
import FavoritesContext from "../context/favorite-context";

function MenuTypeProd() {
  // const history = useNavigate();
  // const [menuBar, setMenuBar] = useState(false);
  const favoritesCtx = useContext(FavoritesContext);
  console.log("favoritesCtx...........", favoritesCtx);

  return (
    <div className={classes.menuType}>
      <ul className={classes.menu}>
        <div className={classes.menuEach}>
          <li className="me-4">
            <a
              href="/all-products"
              className="text-decoration-none"
              style={{ color: "#e1e6ed" }}
            >
              <b>All products</b>
            </a>
          </li>
          <li className="me-4">
            <a
              href="/incharge"
              className="text-decoration-none"
              style={{ color: "#e1e6ed" }}
            >
              <b>Incharge</b>
            </a>
          </li>
          <li className="me-4">
            <a
              href="/earbuds"
              className="text-decoration-none"
              style={{ color: "#e1e6ed" }}
            >
              <b>Earbuds</b>
            </a>
          </li>
          <li className="me-4">
            <a
              href="/others"
              className="text-decoration-none"
              style={{ color: "#e1e6ed" }}
            >
              <b>others</b>
            </a>
          </li>
        </div>
      </ul>
      <NavLink
        // href="/favorite"
        to={{ pathname: "favorite" }}
        // key={_id}
        // state={{ favoritesCtx }}
      >
        {/* <li className={classes.liCard}>
          <button className="btn rounded-pill">
            <i class="bi bi-cart3" />
          </button>
        </li> */}
      </NavLink>
    </div>
  );
}

export default MenuTypeProd;
