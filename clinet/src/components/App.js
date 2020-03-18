import React, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import EventCreateBasic from "./EventCreateBasic";
import EventCreateContacts from "./EventCreateContacts";
import EventCreateFinish from "./EventCreateFinish";
import EventEditBasic from "./EventEditBasic";
import EventEditContacts from "./EventEditContacts";
import EventEditFinish from "./EventEditFinish";
import Login from "./Login";
import SignUp from "./SignUp";
import EventsList from "./EventsList";
import Event from "./Event";
import NavBar from "./NavBar";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <ProtectedRoute
            exact
            isSignedIn={isSignedIn}
            path="/event/create/basic"
            component={EventCreateBasic}
          />
          <ProtectedRoute
            exact
            isSignedIn={isSignedIn}
            path="/event/create/contacts"
            component={EventCreateContacts}
          />
          <ProtectedRoute
            exact
            isSignedIn={isSignedIn}
            path="/event/create/finish"
            component={EventCreateFinish}
          />
          <ProtectedRoute
            exact
            isSignedIn={isSignedIn}
            path="/events"
            component={EventsList}
          />
          <ProtectedRoute
            exact
            isSignedIn={isSignedIn}
            path="/events/:id"
            component={Event}
          />
          <ProtectedRoute
            exact
            isSignedIn={isSignedIn}
            path="/event/edit/basic/:id"
            component={EventEditBasic}
          />
          <ProtectedRoute
            exact
            isSignedIn={isSignedIn}
            path="/event/edit/contacts/:id"
            component={EventEditContacts}
          />
          <ProtectedRoute
            exact
            isSignedIn={isSignedIn}
            path="/event/edit/finish/:id"
            component={EventEditFinish}
          />

          <Route
            path="/login"
            render={props => <Login {...props} signIn={setIsSignedIn} />}
          />

          <Route path="/signup" component={SignUp} />
          <Redirect to="/login" />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
