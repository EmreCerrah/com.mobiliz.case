import React, { Component, setState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as detailActions from "../../redux/actions/detailActions";
import { Label, Button, InputGroup, InputGroupText, Input, Form, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

class VehicleDetail extends Component {

  state={
   
      id:'',
      brand:'',
      plate:'',
      model:'',
      modelYear:'',
      notes:''
  }

  onChangeHandler =(event)=>{
    let name=event.target.name;
    let value=event.target.value

    this.setState({[name]:value})
  }

  handleSubmit = (event) => {
    if (window.confirm(`${this.state.plate} Plakalı Aracı Kaydetmek İstiyor Musunuz?`)) {
      this.savedVehicle(this.state.id,this.state.brand,this.state.plate,this.state.model,this.state.modelYear,this.state.notes)
      event.preventDefault()
    }else {
      event.preventDefault()
    }
  }
  savedVehicle(id,brand,plate,model,modelYear,notes){
    const vehicle= {
      id:this.id,
      plate:this.plate,
      brand:this.brand,
      model:this.model,
      modelYear:this.modelYear,
      notes:this.notes
    }

    this.props.actions.postVehicle(vehicle)

  }

  renderCreate() {
    return (
      <div>
        <Form onSubmit = {this.handleSubmit} > 

        <Label htmlFor={this.props.selectedVehicle.id}>Araç No :</Label>
        <Input
          name="id"
          placeholder=""
          Value={this.props.selectedVehicle.id}
          type="text"
          onChange={this.onChangeHandler}
        />

        <Label htmlFor={this.props.selectedVehicle.plate}>Plaka No :</Label>
        <Input
          name="plate"
          placeholder=""
          Value={this.props.selectedVehicle.plate}
          type="text"
          onChange={this.onChangeHandler}
        />

        <Label htmlFor={this.props.selectedVehicle.brand}>Marka :</Label>
        <Input
          name="brand"
          placeholder=""
          Value={this.props.selectedVehicle.brand}
          type="text"
          onChange={this.onChangeHandler}
        />

        <Label htmlFor={this.props.selectedVehicle.model}>Model :</Label>
        <Input
          name="model"
          placeholder=""
          Value={this.props.selectedVehicle.model}
          type="text"
          onChange={this.onChangeHandler}
        />

        <Label htmlFor={this.props.selectedVehicle.modelYear}>
          Model Yılı :
        </Label>
        <Input
          name="modelYear"
          placeholder=""
          Value={this.props.selectedVehicle.modelYear}
          type="text"
          onChange={this.onChangeHandler}
        />

        <Label htmlFor={this.props.selectedVehicle.notes}>Notlar :</Label>
        <Input
          name="notes"
          placeholder=""
          Value={this.props.selectedVehicle.notes}
          type="textarea"
          onChange={this.onChangeHandler}
        />
        <Button type ='submit' onClick={ this.handleSubmit} color="success">Kaydet</Button>
        <Link style={{ textDecoration: "none" }} to={"/"}>
           <Button color="danger">Kapat</Button>
        </Link>
        </Form>
        <Button color="warning">Bul!</Button>
      </div>
    );
  }

  render() {
    return <div>{this.renderCreate()}</div>;
  }
}
function mapStateToProps(state) {
  return {
    selectedVehicle: state.detailReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      selectVehicle: bindActionCreators(detailActions.selectVehicle, dispatch),
      postVehicle:bindActionCreators(detailActions.postVehicle, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetail);
