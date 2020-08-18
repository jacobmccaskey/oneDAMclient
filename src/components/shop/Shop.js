import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles.js";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import FavButton from "./FavButton";
import CartButton from "./cartButton";
import { User } from "../../Context";
import CardMedia from "@material-ui/core/CardMedia";

export default function Shop() {
  const context = useContext(User);

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.gridbox}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {context.store.map((item) => (
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
                      favorites={context.favorites}
                      addFav={context.addFav}
                      deleteFav={context.deleteFav}
                    />
                    <CartButton
                      item={item}
                      cart={context.cart}
                      addCart={context.addCart}
                      deleteCart={context.deleteCart}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
