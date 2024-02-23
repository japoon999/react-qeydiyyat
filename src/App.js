import React, { Component } from "react";
import './App.css';

export default class App extends Component {
  state = {
    ad: "",
    unvan: "",
    telefon: "",
    isDisabled: true,
  };

  change = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.checkFormValidity);
  };

  checkFormValidity = () => {
    const { ad, unvan, telefon } = this.state;
    if (ad !== "" && unvan !== "" && telefon !== "") {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  Submit = (e) => {
    e.preventDefault();
    alert("Qeydiyyatdan kecdiz");
    this.setState({ ad: "", unvan: "", telefon: "", isDisabled: true });
  };

  render() {
    const { isDisabled } = this.state;

    return (
      <div className="cont">
        <form onSubmit={this.Submit}>
          <label htmlFor="ad">
            Ad, Soyad, Ata adi:{" "}
            <input
              type="text"
              name="ad"
              value={this.state.ad}
              id="ad"
              onChange={this.change}
            />
          </label>

          <label htmlFor="unvan">
            Unvan:{" "}
            <input
              type="text"
              name="unvan"
              value={this.state.unvan}
              id="unvan"
              onChange={this.change}
            />
          </label>

          <label htmlFor="password">
            Telefon:
            <input
              type="text"
              name="telefon"
              value={this.state.telefon}
              id="telefon"
              onChange={this.change}
            />
          </label>
          <button type="submit" disabled={isDisabled}>Gonder</button>
        </form>
      </div>
    );
  }
}
