import React, { useContext } from "react";
import PropTypes from "prop-types";
import { User } from "../../Context";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

export default function ShoppingCart() {
  const { cart } = useContext(User);

  return (
    <div>
      <Button>
        <ShoppingCartIcon />
        <span>{cart.length}</span>
      </Button>
    </div>
  );
}
