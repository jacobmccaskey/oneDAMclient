import React, { useState, useEffect, useContext } from "react";
import { User } from "../../Context";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export default function RecentOrders(props) {
  const context = useContext(User);
  const style = useStyles();
  const [ordersArray, setOrdersArray] = useState([]);

  useEffect(() => {
    setOrdersArray(context.orders);
    console.log(ordersArray);
  }, [context.orders, ordersArray]);
  return (
    <div>
      {ordersArray.length === 0 ? (
        <Container className={style.emptyOrderPage}>
          <Typography className={style.emptyOrderTxt}>
            It looks like you do not have any recent orders
          </Typography>
          <Typography>
            You can shop our inventory <a href="/">here</a>
          </Typography>
        </Container>
      ) : (
        <Container className={style.ordersWrap}>
          {ordersArray.map((item) => (
            <Paper className={style.paperOrder}>
              {item.order.map((index) => (
                <ul>
                  <li>
                    <Typography>
                      {index.price_data.product_data.name}
                      <span> {index.quantity}</span>
                    </Typography>
                  </li>
                </ul>
              ))}
              <hr />
              <Typography className={style.orderText}>
                Amount: ${item.amount}
              </Typography>
              <Typography className={style.orderText}>
                Status{" "}
                <span>
                  {item.paid === true ? "paid" : "payment processing"}
                </span>
              </Typography>
              <Typography className={style.orderText}>
                Order recieved: {item.time}
              </Typography>
            </Paper>
          ))}
        </Container>
      )}
    </div>
  );
}
