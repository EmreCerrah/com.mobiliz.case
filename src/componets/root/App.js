import React, { Component } from "react";
import { Routes, Route , useParams } from "react-router-dom";
import { Container } from "reactstrap";
import VehicleDetail from "../detail/VehicleDetail";
import Notfound from "../common/Notfound";
import Navi from "../navi/Navi";

import Dasboard from "./Dasboard";

export default class App extends Component {

  

  render() {
    return (
      <Container md="6" sm="">
        <Navi />
        <Routes>
          <Route exact path="/" element={<Dasboard />} />
          <Route exact path="/detail/:id"  element={<VehicleDetail isNew={false} />} />
          <Route exact path="/addnew"  element={<VehicleDetail isNew={true} />} />
          <Route path="/" element={<Dasboard />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Container>
    );
  }
}
