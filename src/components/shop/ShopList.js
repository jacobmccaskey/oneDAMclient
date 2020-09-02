import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles.js";
import Container from "@material-ui/core/Container";
import { Link, useRouteMatch } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import FavButton from "./FavButton";
// import ViewItem from "./ViewItem";
import { User } from "../../Context";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

export default function ShopList() {
  const classes = useStyles();
  const context = useContext(User);
  let { url } = useRouteMatch();

  return (
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
                    item={item}
                    favorites={context.favorites}
                    addFav={context.addFav}
                    deleteFav={context.deleteFav}
                  />

                  <IconButton>
                    <Link to={`${url}/${item._id}/${item.name}`}>
                      <AddIcon />
                    </Link>
                  </IconButton>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
