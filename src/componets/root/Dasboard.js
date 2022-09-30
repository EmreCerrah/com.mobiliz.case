import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ModelsList from "../models/ModelsList";
import VehiclesList from "../products/VehiclesList";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/vehiclesActions";

import { connect } from "react-redux";

class Dasboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md="3" sm="12">
            <ModelsList />
          </Col>

          <Col md="9" sm="12">
            <VehiclesList />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentModels: state.changeModelReducer,
    vehicles: state.vehiclesListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getVehicles: bindActionCreators(productActions.getVehicles, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dasboard);
