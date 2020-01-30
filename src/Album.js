import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Classes from "./Album.module.css";

const PhotoAlbum = lazy(() => import("./Components/PhotoAlbum"));

function Album() {
  return (
    <div className={Classes.Album}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/photoAlbum" component={PhotoAlbum} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default Album;
