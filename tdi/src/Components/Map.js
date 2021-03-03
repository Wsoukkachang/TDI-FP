import React from "react";
import "animate.css"; // you need to require the css for animation
import "leaflet/dist/leaflet.css";
// import "./Map.css";

export default function SiteMap({ center, zoom }) {
  return (
    <div className="animate__animated animate__backInUp animate__delay-1s mapContainer">
      {/* <iframe
        title="myMap"
        className="windyMap"
        src="https://embed.windy.com/embed2.html?lat=32.751&lon=-96.999&detailLat=32.757&detailLon=-96.801&width=650&height=450&zoom=11&level=surface&overlay=gustAccu&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1"
        frameborder="0"
      ></iframe> */}

      <iframe
        title="myMap"
        className="windyMap"
        src="https://embed.windy.com/embed2.html?lat=32.751&lon=-96.999&detailLat=32.757&detailLon=-96.801&width=650&height=450&zoom=4&level=surface&overlay=gustAccu&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1"
        frameborder="10"
      ></iframe>
    </div>
  );
}
