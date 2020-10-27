import React from "react";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function RecentOrders(props) {
  const style = useStyles();
  const orders = props.orders;
  return (
    <div>
      {orders && orders.length === 0 ? (
        <Container className={style.emptyOrderPage}>
          <Typography className={style.emptyOrderTxt}>
            It looks like you do not have any recent orders
          </Typography>
          <Typography>
            You can shop our inventory <a href="/">here</a>
          </Typography>
        </Container>
      ) : (
        <Container>Coming Soon...</Container>
      )}
    </div>
  );
}
