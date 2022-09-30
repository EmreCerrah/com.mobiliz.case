import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as detailActions from "../../redux/actions/detailActions";
import { Label, Button, Input, Form } from "reactstrap";
import { Link } from "react-router-dom";

class AddNewVehicle extends Component {
    state = {
        id: "",
        brand: "",
        plate: "",
        model: "",
        modelYear: "",
        notes: "",
      };
    
      componentDidMount(){
        
      }
    
      onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
        this.setState({ [name]: value });
      };
    
      handleSubmit = (event) => {
        if (
          window.confirm(
            `${this.state.plate} Plakalı Aracı Kaydetmek İstiyor Musunuz?`
          )
        ) {
          this.savedVehicle(
            this.state.id,
            this.state.brand,
            this.state.plate,
            this.state.model,
            this.state.modelYear,
            this.state.notes
          );
          event.preventDefault();
        } else {
          event.preventDefault();
        }
      };
      savedVehicle(id, brand, plate, model, modelYear, notes) {
        const vehicle = {
          id: this.id,
          plate: this.plate,
          brand: this.brand,
          model: this.model,
          modelYear: this.modelYear,
          notes: this.notes,
        };
    
        this.props.actions.postVehicle(vehicle);
      }
    
  render() {
    return (
    <div>
    <Form onSubmit={this.handleSubmit}>
      <Label htmlFor="no" >Araç No :</Label>
      <Input
        name="id"
        placeholder="Araç ID'si yazınız"
        type="text"
        onChange={this.onChangeHandler}
      />

      <Label>Plaka No :</Label>
      <Input
        name="plate"
        placeholder="00 ÖRN 001"
        type="text"
        onChange={this.onChangeHandler}
      />

      <Label>Marka :</Label>
      <Input
        name="brand"
        placeholder="Markasını yazınız"
        type="text"
        onChange={this.onChangeHandler}
      />

      <Label>Model :</Label>
      <Input
        name="model"
        placeholder="Modelini yazınız"
        type="text"
        onChange={this.onChangeHandler}
      />

      <Label>Model Yılı :</Label>
      <Input
        name="modelYear"
        placeholder="Model yılını yazınız"
        type="number"
        onChange={this.onChangeHandler}
      />

      <Label>Notlar :</Label>
      <Input
        name="notes"
        placeholder="Ek Notlar"
        type="textarea"
        onChange={this.onChangeHandler}
      />
      <Button type="submit" onClick={this.handleSubmit} color="success">
        Kaydet
      </Button>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <Button color="danger">Kapat</Button>
      </Link>
    </Form>
  </div>
  )

}
}
function mapStateToProps(state, ownProps) {
    return {
      //id:ownProps.params.id;
      selectedVehicle: state.detailReducer,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        selectVehicle: bindActionCreators(detailActions.selectVehicle, dispatch),
        postVehicle: bindActionCreators(detailActions.postVehicle, dispatch),
      },
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(AddNewVehicle);
