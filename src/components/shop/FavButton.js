import React, { useState } from "react";
import PropTypes from "prop-types";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import IconButton from "@material-ui/core/IconButton";

export default function FavButton(props) {
  const [picked, setPick] = useState(false);

  const addFav = (itemId) => {
    setPick(true);
    props.addFav(itemId);
  };

  const deleteFav = (itemId) => {
    setPick(false);
    props.deleteFav(itemId);
  };

  const toggleFavorite = () => {
    picked === false ? addFav(props.id) : deleteFav(props.id);
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
  id: PropTypes.string,
  favorites: PropTypes.array,
};
