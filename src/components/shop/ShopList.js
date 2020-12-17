import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles.js";
import Container from "@material-ui/core/Container";
import { Link, useRouteMatch } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { User } from "../../Context";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import FavButton from "./FavButton";

export default function ShopList() {
  const classes = useStyles();
  const context = useContext(User);
  let { url } = useRouteMatch();

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.gridbox}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1}>
              {context.store.map((item) => (
                <Grid key={item._id} item>
                  <Paper elevation={1} className={classes.paper}>
                    <Link to={`${url}/${item._id}`}>
                      <CardMedia
                        className={classes.media}
                        image={item.images[0].Location}
                        title={item.name}
                        loading="lazy"
                      />
                    </Link>
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.text}
                    >
                      {item.name} | {item.gender}
                    </Typography>
                    <Typography
                      variant="body1"
                      // component="span"
                      color="textSecondary"
                      className={classes.itemVendor}
                    >
                      {item.vendor}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.itemVendor}
                      style={{ fontWeight: "500" }}
                    >
                      {`$${parseFloat(item.price).toFixed(2)}`}
                    </Typography>
                    <FavButton
                      favorites={context.favorites}
                      item={item}
                      addFav={context.addFav}
                      deleteFav={context.deleteFav}
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
