import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button, Table } from "reactstrap";

import { bindActionCreators } from "redux";
import * as vehiclesActions from "../../redux/actions/vehiclesActions";
import * as detailActions from "../../redux/actions/detailActions";
import { Link, useParams } from "react-router-dom";

class VehiclesList extends Component {
  componentDidMount() {
    this.props.actions.getVehicles();
  }

  goDetail(vehicle  ){
    this.props.actions.selectVehicle(vehicle)
    console.log(this.props.selectedVehicle)

  }
  

  render() {
  
    return (
      <div>
        <h4>
          <Badge color="warning">Araçlar</Badge>
          <Badge color="success">{/* buraya model gelicek  */}</Badge>
        </h4>

        <div className="d-flex align-content-center flex-wrap ">
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>brand</th>
                <th>madel</th>
                <th>model year</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <th scope="row">{vehicle.id}</th>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.modelYear}</td>
                  <td>
                  <Link style={{ textDecoration: "none" }} to={`detail/${vehicle.id}`}>
                
              
                    <Button
                      color="danger"
                      onClick={() => this.goDetail(vehicle)}
                    >
                      Detay
                    </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedVehicle: state.detailReducer,
    vehicles: state.vehiclesListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getVehicles: bindActionCreators(vehiclesActions.getVehicles, dispatch),
      selectVehicle: bindActionCreators(detailActions.selectVehicle, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesList);
