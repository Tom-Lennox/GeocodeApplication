import React, { Component } from "react";

import SearchForm from "./SearchForm";
import GeocodeResult from "./GeocodeResult";
import Map from "./Map";

import { geocode } from "../domain/Geocorder.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.6803997,
        lng: 139.7690174
      },
    };
  }

  setErrorMessage(message){
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0
      }
    });
  }
  handlePlaceSubmit(place) {
    //console.log(place);
    geocode(place)
      .then(({ status, address, location }) => {
        //該当なし考慮
        switch(status) {
          case 'OK': {
            this.setState({ address, location });
            break;
          }  
          //該当なし
          case 'ZERO_RESULTS': {
            this.setErrorMessage('該当なし');
            break;
          }
          //エラー
          default : {
            this.setErrorMessage('エラー');
            break;
          }
        }
      })
      .catch(() => {
      //console.log(error);
      this.setErrorMessage('通信エラー');
      });
    //console.log(place);
  }
  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          address={this.state.address}
          location={this.state.location}
        />
        <Map location={this.state.location} />
      </div>      
    );
  }
}

export default App;
