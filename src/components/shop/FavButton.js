import React, { useState } from "react";
import PropTypes from "prop-types";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import IconButton from "@material-ui/core/IconButton";

export default function FavButton(props) {
  const [picked, setPick] = useState(false);

  const addFav = (item) => {
    setPick(true);
    props.addFav(item);
  };

  const deleteFav = (item) => {
    setPick(false);
    props.deleteFav(item);
  };

  const toggleFavorite = () => {
    picked === false ? addFav(props.item) : deleteFav(props.item);
  };
  return (
    <div style={{ display: "inline-block" }}>
      <IconButton onClick={toggleFavorite}>
        {picked !== true ? <FavoriteBorderIcon /> : <FavoriteOutlinedIcon />}
      </IconButton>
    </div>
  );
}

FavButton.propTypes = {
  item: PropTypes.object,
  favorites: PropTypes.array,
};
