import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles.js";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import FavButton from "./FavButton";
import CartButton from "./cartButton";
import { User } from "../../Context";
import CardMedia from "@material-ui/core/CardMedia";

export default function Shop() {
  const [store, setStore] = useState([]);
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);

  const addCart = (itemId) => {
    cart.length === 0
      ? setCart([{ id: itemId }])
      : setCart([...cart, { id: itemId }]);
  };
  const deleteCart = (itemId) => {
    let filteredArray = cart.filter((items) => items.id !== itemId);
    setList(filteredArray);
  };

  const addFav = (itemId) => {
    list.length === 0
      ? setList([{ id: itemId }])
      : setList([...list, { id: itemId }]);
  };
  const deleteFav = (itemId) => {
    let filteredArray = list.filter((items) => items.id !== itemId);
    setList(filteredArray);
  };

  const fetchData = () => {
    axios
      .get("http://localhost:4545/api/store")
      .then((response) => setStore(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <User.Provider
      value={{
        list,
        cart,
        addFav,
        deleteFav,
        addCart,
        deleteCart,
      }}
    >
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.gridbox}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {store.map((item) => (
                  <Grid key={item._id} item>
                    <Paper elevation={3} className={classes.paper}>
                      <CardMedia
                        className={classes.media}
                        image={item.imageUrl}
                        title={item.name}
                        loading="lazy"
                      />
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {`$${item.price}`}
                      </Typography>

                      <FavButton
                        id={item._id}
                        list={list}
                        addItem={addFav}
                        deleteItem={deleteFav}
                      />
                      <CartButton
                        id={item._id}
                        cart={cart}
                        addItem={addCart}
                        deleteItem={deleteCart}
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </User.Provider>
  );
}
