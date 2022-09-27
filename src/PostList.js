import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";


function PostList() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <p>Here is a list of the user's posts</p>
      </Route>
      <Route path={`${path}/:postId`}>
        <p>Here is a single post</p>
      </Route>
    </Switch>
  );
}

export default PostList;
