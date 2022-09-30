import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink,Input,Button,InputGroup } from "reactstrap";
import { Link } from "react-router-dom";


export default class Navi extends Component {
state= {
  plaka:null 
}

findPlate(plateNo){



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
    <Input placeholder="Plaka Ara" type="search" value={this.value} onChange={ (e)=> this.state.plaka= e.target.value }  />
    <Button color="success" onClick={(e)=> {console.log(this.state.plaka)}}>
      Ara!
    </Button>
  </InputGroup></NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
