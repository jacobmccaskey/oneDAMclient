import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ViewItem from "./ViewItem";
// import { User } from "../../Context";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ShopList from "./ShopList";

export default function Shop() {
  let { path } = useRouteMatch();
  return (
    <React.Fragment>
      <CssBaseline />
      <Route exact path={path} render={() => <ShopList />} />
      <Switch>
        <Route path={`${path}/:ID`} render={() => <ViewItem />} />
      </Switch>
    </React.Fragment>
  );
}
