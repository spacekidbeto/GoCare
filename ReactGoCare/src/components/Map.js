import React from 'react';
import locations from '../data/locations';
     const style = {
         width: '100%',
         height: '400px'
     }
 function Map() {
   
   
  return (
    <section id="Map">
    <div className="container-fluid p-0">
      <div id="map" style={style}>
      <h2>{locations.map((elements)=>
<div class="card container">
  <h5 class="card-header">{elements.gender} | Timestamp : {elements.timestamp}</h5>
  <div class="card-body">
    <ul class="card-title h4">Co-ordinates
    <li class="card-text">Lat :{elements.lat}</li>
    <li class="card-text">Long :{elements.long}</li>
    </ul>
    <a href={'http://test.com'} className="btn btn-primary">Get Directions</a>
  </div>
</div>
)}</h2>
      </div>
      </div>
  </section>
  )
}

export default Map;
