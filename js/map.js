var platform = new H.service.Platform({
  apikey: "W9nX0B6zf4kmmrxP8M0NpldWEFgRsrTEl8p9M75ifNw"
});

var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat: 52.53075, lng: 13.3851},
  zoom: 11,
  pixelRatio: window.devicePixelRatio || 1
});

var svgMarker = new  H.map.Icon('./images/tractor.png');

<<<<<<< HEAD
var marker = new H.map.Marker({lat:21.09413, lng:100.56038}, {icon: svgMarker});
=======

var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 52.53075, lng: 13.3851},
    marker = new H.map.Marker(coords, {icon: icon});

var marker = new H.map.Marker({lat:21.15824, lng:-100.93362}, {icon: svgMarker});

>>>>>>> fcd6ed0c74f4fae93f6d10cdc253bfa3c3462fca

map.addObject(marker);
