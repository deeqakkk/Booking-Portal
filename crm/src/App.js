import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "./Login/components/AdminLogin";
import Home from "./Home/home";
import Navbar from './Navbar/Navbar';
import SearchResult from "./Bookings/BookingSearchResult";
import EditBookings from "./Bookings/EditBookings";
import { useDispatch } from "react-redux";
import { adminIsAuth } from "./Login/adminAuth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminIsAuth());
  }, [dispatch]);
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={AdminLogin}></Route>
    <div>
      <Navbar/>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/searchResult" exact component={SearchResult}></Route>
      <Route path="/editBooking" exact component={EditBookings}></Route>
      </div>
    </Switch>
  </Router>
  );
}

export default App;
