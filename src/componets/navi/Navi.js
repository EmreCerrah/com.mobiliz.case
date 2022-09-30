import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
  InputGroup,
} from "reactstrap";
import { Link, useHistory  } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as detailActions from "../../redux/actions/detailActions";

class Navi extends Component {
  state = {
    plaka: "",
    id:""
  };

  findPlate(plateNo) {
  
    const searchedVehicle=this.props.vehicles.find(v =>v.plate===plateNo)
    console.log(searchedVehicle)
    this.props.actions.selectVehicle(searchedVehicle)
    this.state.id=searchedVehicle.id;
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Mobiliz</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link style={{ textDecoration: "none" }} to={""}>
                <NavLink>Araçlar</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link style={{ textDecoration: "none" }} to={"addnew"}>
                <NavLink>Araç Ekle</NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/EmreCerrah">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <InputGroup>
                <Input
                  placeholder="Plaka Ara: 00 ÖRN 001"
                  type="search"
                  value={this.value}
                  onChange={(e) => (this.state.plaka = e.target.value)}
                /> <Link style={{ textDecoration: "none" }} to={`/detail/${this.id}`}>
                <Button
                  color="success"
                  onClick={() => {
                    this.findPlate(this.state.plaka);  }}
                >
                  Ara!
                </Button> </Link>
              </InputGroup>
            </NavItem>
          </Nav>
        </Navbar>
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
     // getVehicles: bindActionCreators(vehiclesActions.getVehicles, dispatch),
     selectVehicle: bindActionCreators(detailActions.selectVehicle, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navi);
