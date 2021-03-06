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

var marker = new H.map.Marker({lat:21.09413, lng:100.56038}, {icon: svgMarker});

map.addObject(marker);
