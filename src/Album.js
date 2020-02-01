import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Classes from "./Album.module.css";

/* Dynamic import of Component */
const PhotoAlbum = lazy(() => import("./Components/PhotoAlbum"));

/** Root Component */
function Album() {
  return (
    <div className={Classes.Album}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/photoAlbum" component={PhotoAlbum} />
            <Redirect exact from="/" to="photoAlbum" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default Album;
