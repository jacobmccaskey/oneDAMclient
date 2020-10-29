import React, { useContext } from "react";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import { User } from "../../Context";

export default function Favorites() {
  const context = useContext(User);
  const styles = useStyles();
  return (
    <div style={{ maxWidth: "500px" }}>
      {context.favorites.map((item) => (
        <Paper key={item._id} className={styles.favContainer}>
          <div className={styles.favImg}>
            <Link to={`/shop/${item._id}`}>
              <img src={item.images[0].Location} alt={item.name} />
            </Link>
          </div>
          <div className={styles.favDetails}>
            <Typography>{item.name}</Typography>
            <Typography variant="body2">${item.price}</Typography>
            <Typography variant="body2">
              {item.quantity > 0 ? "In Stock" : "Not In Stock"}
            </Typography>
            <div style={{ display: "inline" }}>
              <Link to={`/shop/${item._id}`} style={{ textDecoration: "none" }}>
                <Button className={styles.favViewBtn}>view item</Button>
              </Link>

              <Button
                className={styles.deleteFavBtn}
                onClick={() => context.deleteFav(item)}
              >
                <DeleteOutlineOutlinedIcon />
              </Button>
            </div>
          </div>
        </Paper>
      ))}
    </div>
  );
}
