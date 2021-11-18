import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "./Login/components/AdminLogin";
import Home from "./Home/home";
import Navbar from './Navbar/Navbar';
import Footer from './footer/Footer';
import SearchResult from "./Bookings/BookingSearchResult";
import EditBookings from "./Bookings/EditBookings";
import { adminIsAuth } from "./Login/adminAuth";
import { useDispatch } from "react-redux";
import "./App.css";

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
      <Navbar />
        <Route path="/home" exact component={Home}></Route>
        <Route path="/searchResult" exact component={SearchResult}></Route>
        <Route path="/editBooking" exact component={EditBookings}></Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
