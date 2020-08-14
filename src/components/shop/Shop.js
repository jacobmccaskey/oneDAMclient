import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

//for item card
import CardMedia from "@material-ui/core/CardMedia";

export default function Shop() {
  const [store, setStore] = useState([]);

  const fetchData = () => {
    axios
      .get(process.env.REACT_APP_STORE)
      .then((response) => setStore(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(store);

  function showConsole() {
    console.log("works");
  }
  const classes = useStyles();
  return (
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

                    <IconButton onClick={showConsole}>
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton onClick={showConsole}>
                      <AddIcon />
                    </IconButton>
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
