var platform = new H.service.Platform({
  apikey: "W9nX0B6zf4kmmrxP8M0NpldWEFgRsrTEl8p9M75ifNw"
});

var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:21.15824, lng:-100.93362},
  zoom: 11,
  pixelRatio: window.devicePixelRatio || 1
});

var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">T</text></svg>';

<<<<<<< HEAD
var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 52.53075, lng: 13.3851},
    marker = new H.map.Marker(coords, {icon: icon});
=======
var marker = new H.map.Marker({lat:21.15824, lng:-100.93362}, {icon: svgMarker});
>>>>>>> e82aec83578dd18a66e3f099c52ccf78ad1e935d

map.addObject(marker);
map.setCenter(coords);
