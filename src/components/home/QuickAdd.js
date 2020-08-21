import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import Image from "material-ui-image";
import Container from "@material-ui/core/Container";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function QuickAdd(props) {
  const classes = useStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Container maxWidth="md" style={{ marginTop: "1rem" }}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {props.store.map((item) => (
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
              <GridListTile key={item._id}>
                <img src={item.imageUrl} alt={item.name} />
                <GridListTileBar
                  title={item.name}
                  subtitle={item.description}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${item.name}`}
                      className={classes.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            </GridList>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

QuickAdd.propTypes = {
  store: PropTypes.array.isRequired,
  DeviceType: PropTypes.string,
};
