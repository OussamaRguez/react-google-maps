import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapComponent = (props) => {
  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 37.774929,
        lng: -122.419418,
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(MapComponent);
