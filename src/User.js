import React from "react";
import { Route, Switch, useRouteMatch, userRouteMatch } from "react-router-dom";
import UserProfile from "./UserProfile";
import PostList from "./PostList";

function User() {

    const { path } = useRouteMatch(); 
  return (
    <Switch>
      <Route path={`${path}/post`}>
        <PostList />
      </Route>
      <Route path="/users/:userId">
        <UserProfile />
      </Route>
    </Switch>
  );
}

export default User;
