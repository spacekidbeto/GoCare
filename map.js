

const api = "http://api.open-notify.org/astros.json";
var data = fetch(api)
console.log(data);

var locations = [
      ['Female', 32.85, -96.79],
      ['Male', 32.75, -96.79],
      ['Mattggle 14:10 Group', 32.85, -96.59]
    ];

//var myJsonString = JSON.stringify(locations);

//console.log(myJsonString);

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(32.77, -96.76),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }