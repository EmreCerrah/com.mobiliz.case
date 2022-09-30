import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Label, Input, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/modelActions";
import { Badge, FormGroup, CardHeader } from "reactstrap";
import * as productActions from "../../redux/actions/vehiclesActions";

class ModelsList extends Component {
  componentDidMount() {
    this.props.actions.getModels();
  }

  state = {
    modele: null,
  };
  selectedModel() {
    this.props.actions.getVehicles(this.state.modele);
  }

  logevent = (e) => {
    this.state.modele = e.target.value;
  };

  render() {
    return (
      <div>
        <h4>
          <Badge color="warning">Filtrele</Badge>
        </h4>
        <Card
          className="my-2"
          color="light"
          style={{
            width: "18rem",
          }}
        >
          <FormGroup>
            <CardHeader>
              <Label for="brandSelect">Marka Seçiniz</Label>
            </CardHeader>
            <Input
              id="brandSelect"
              name="select"
              onChange={(e) => this.logevent(e)}
              type="select"
            >
              {this.props.models.map((model) => (
                <option key={model.id}>{model.brand}</option>
              ))}
            </Input>
          </FormGroup>
          <Button color="primary" onClick={() => this.selectedModel()}>
            Ara!
          </Button>
        </Card>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    models: state.modelsListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getModels: bindActionCreators(categoryActions.getModels, dispatch),
      getVehicles: bindActionCreators(productActions.getVehicles, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelsList);
