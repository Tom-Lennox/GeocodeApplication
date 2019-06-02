import React, { PropTypes } from "react";

const GeocodeResult = ({ address, location }) => (
  <ul className="geocode-result">
    <li>住所：{address}</li>
    <li>緯度：{location.lat}</li>
    <li>経度：{location.lng}</li>
  </ul>
);

GeocodeResult.protoTypes = {
  address: PropTypes.string,
  //lat, lng統合後の.numberのバリデーション
  location: PropTypes.objectOf(PropTypes.number).isRequired
};

GeocodeResult.defaultProps = {
  address: ""
};

export default GeocodeResult;
