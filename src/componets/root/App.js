import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import VehicleDetail from "../detail/VehicleDetail";
import Notfound from "../common/Notfound";
import Navi from "../navi/Navi";

import Dasboard from "./Dasboard";
import AddNewVehicle from "../detail/AddNewVehicle";

export default class App extends Component {

  

  render() {
    return (
      <Container md="6" sm="">
        <Navi />
        <Routes>
          <Route exact path="/" element={<Dasboard />} />
          <Route exact path="/detail/:id"  element={<VehicleDetail />} />
          <Route exact path="/addnew"  element={<AddNewVehicle/>} />
          <Route path="/" element={<Dasboard />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Container>
    );
  }
}
