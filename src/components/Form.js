import React, { Component } from "react";
import { TextField, Button, Snackbar } from "@material-ui/core";

const button = {
  marginRight: 10
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      description: "",
      dtInitial: "",
      dtEnd: "",
      open: false,
      vertical: "top",
      horizontal: "center"
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    if (
      this.state.name === "" ||
      this.state.description === "" ||
      this.state.dtInitial === "" ||
      this.state.dtEnd === ""
    ) {
      this.setState({ open: true, vertical: "top", horizontal: "center" });
    } else {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  };

  cancelSubmitForm = () => {
    this.setState(this.initialState);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      name,
      description,
      dtInitial,
      dtEnd,
      vertical,
      horizontal,
      open
    } = this.state;

    return (
      <form>
        <div className="flex-content__between">
          <div className="size-input">
            <TextField
              id="text"
              label="Tarefa"
              type="text"
              variant="outlined"
              fullWidth
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="size-input">
            <TextField
              id="text"
              label="Descrição"
              type="text"
              variant="outlined"
              fullWidth
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </div>

          <div className="size-input">
            <TextField
              id="text"
              label="Data inicio"
              type="date"
              variant="outlined"
              fullWidth
              onChange={this.handleChange}
              name="dtInitial"
              value={dtInitial}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>

          <div className="size-input">
            <TextField
              id="text"
              label="Data termino"
              type="date"
              variant="outlined"
              fullWidth
              onChange={this.handleChange}
              name="dtEnd"
              value={dtEnd}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
        </div>

        <div className="flex-content__center">
          <Button
            variant="contained"
            color="primary"
            value="Submit"
            type="button"
            onClick={this.submitForm}
            style={button}
          >
            Adcionar
          </Button>

          <Button
            variant="contained"
            color="secondary"
            value="Submit"
            type="button"
            onClick={this.cancelSubmitForm}
          >
            Cancelar
          </Button>

          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={this.handleClose}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">Insira todas informações</span>}
          />
        </div>
      </form>
    );
  }
}

export default Form;
