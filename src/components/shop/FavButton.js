import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

export default function FavButton(props) {
  const [picked, setPick] = useState(false);

  const addItem = (itemId) => {
    setPick(true);
    props.addItem(itemId);
  };

  const deleteItem = (itemId) => {
    setPick(false);
    props.deleteItem(itemId);
  };

  const toggleFavorite = () => {
    picked === false ? addItem(props.id) : deleteItem(props.id);
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
  picked: PropTypes.bool,
  props: PropTypes.string,
};
