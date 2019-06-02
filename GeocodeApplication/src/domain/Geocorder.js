import axios from "axios";
const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

export const geocode = place =>
axios
.get(GEOCODE_ENDPOINT, {
  params: {
    address: place,
    key: "【API】"  
  }
})
.then(results => {
  //console.log(results);
  const data = results.data;
  const status = data.status;
  const result = results.data.results[0];

  if (typeof result === 'undefined') {
      return{status};
  }

  const address = result.formatted_address;
  const location = result.geometry.location;
  return { status, address, location };
  //console.log(result);
});

export const reverseGeocode = () => null;