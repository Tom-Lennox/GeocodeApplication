﻿import React, { Component, PropTypes } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "kanagawa"
    };
  }

  handlePlaceChange(place) {
    this.setState({ place });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.place);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.place}
          onChange={e => this.handlePlaceChange(e.target.value)}
        />
        <input type="submit" value="検索" />
        <script src="http://maps.google.com/maps/api/js?key=【API】"></script>
      </form>
    );
  }
}

//バリデーション
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
//--
