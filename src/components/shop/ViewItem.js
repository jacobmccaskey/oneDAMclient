import React from "react";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";

export default function ViewItem() {
  const { ID, name } = useParams();
  return (
    <div style={{ paddingTop: "5rem", display: "block" }}>
      <h1>
        product: ID: {ID} / {name}
      </h1>
    </div>
  );
}
