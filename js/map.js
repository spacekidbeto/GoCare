var locations = [
      ['Peter', 32.85, -96.79],
      ['Omar', 32.75, -96.79],
      ['Male 14:10 Group', 32.85, -96.59]
    ];

    var config = require('data.json');
console.log(config.lon + ' ' + config.lan + '' + config.sex + '' + config.desc + ' ' );


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