import React, { useContext } from "react";
import { User } from "../../Context";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

export default function ShoppingCart() {
  const { cart } = useContext(User);

  return (
    <div>
      <Button style={{ color: "grey" }}>
        <ShoppingCartIcon />
        <span style={{ fontSize: "15px", fontFamily: "Roboto" }}>
          {cart.length}
        </span>
      </Button>
    </div>
  );
}
