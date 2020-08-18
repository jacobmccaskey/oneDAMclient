import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";

export default function CartButton(props) {
  const [added, setAdd] = useState(false);

  const addCart = (item) => {
    setAdd(true);
    props.addCart(item);
  };

  const deleteCart = (item) => {
    setAdd(false);
    props.deleteCart(item);
  };

  const toggleAdd = () => {
    added === false ? addCart(props.item) : deleteCart(props.item);
  };
  return (
    <div style={{ display: "inline-block" }}>
      <IconButton onClick={toggleAdd}>
        {added !== true ? <AddIcon /> : <CheckIcon />}
      </IconButton>
    </div>
  );
}

CartButton.propTypes = {
  picked: PropTypes.bool,
  props: PropTypes.string,
};
