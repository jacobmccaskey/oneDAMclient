import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import IconButton from "@material-ui/core/IconButton";
// import { User } from "../../Context";

export default function FavButton(props) {
  const [picked, setPick] = useState(false);
  const { favorites, item, addFav, deleteFav } = props;

  const toggleFav = (item) => {
    const ID = item._id;
    const value = favorites.find((fav) => fav.item._id === ID);
    if (value === undefined && picked === false) {
      setPick(true);
      addFav(item);
    }
    if (value && picked === true) {
      setPick(false);
      deleteFav(item);
    }
  };

  useEffect(() => {
    const ID = item._id;
    const checkForFav = favorites.find((fav) => fav.item._id === ID);
    console.log(favorites);
    console.log(checkForFav);
    if (checkForFav !== undefined && checkForFav.item._id === ID) {
      console.log(checkForFav._id);
      setPick(true);
    }
  }, [favorites, item._id]);

  return (
    <div style={{ display: "inline-block" }}>
      <IconButton onClick={() => toggleFav(item)}>
        {picked !== true ? <FavoriteBorderIcon /> : <FavoriteOutlinedIcon />}
      </IconButton>
    </div>
  );
}

FavButton.propTypes = {
  item: PropTypes.object,
  favorites: PropTypes.array,
};
