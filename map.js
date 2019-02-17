

 var locations = [
       ['Female, 2/12/19 - 17:07', 32.85, -96.79],
       ['Male, 2/10/19 - 11:44', 32.75, -96.79],
       ['Female, 2/12/19 - 21:01', 32.85, -96.59],
       ['Female, 2/12/19 - 21:11', 32.88, -96.56],
       ['Female, 2/12/19 - 21:11', 32.87, -96.58],
       ['Female, 2/12/19 - 21:11', 32.84, -96.64],
       ['Female, 2/12/19 - 21:11', 32.85, -96.60],
       ['Female, 2/12/19 - 21:11', 32.891, -96.65]
     ];

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