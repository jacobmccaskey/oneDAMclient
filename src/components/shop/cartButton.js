import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";

export default function CartButton(props) {
  const [added, setAdd] = useState(false);

  const addItem = (itemId) => {
    setAdd(true);
    props.addItem(itemId);
  };

  const deleteItem = (itemId) => {
    setAdd(false);
    props.deleteItem(itemId);
  };

  const toggleFavorite = () => {
    added === false ? addItem(props.id) : deleteItem(props.id);
  };
  return (
    <div style={{ display: "inline-block" }}>
      <IconButton onClick={toggleFavorite}>
        {added !== true ? <AddIcon /> : <CheckIcon />}
      </IconButton>
    </div>
  );
}

CartButton.propTypes = {
  picked: PropTypes.bool,
  props: PropTypes.string,
};
