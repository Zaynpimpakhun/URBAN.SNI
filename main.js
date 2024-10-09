// Initialize the map
const map = new maplibregl.Map({
  container: 'map', // container id
  style: 'https://api.maptiler.com/maps/openstreetmap/style.json?key=rrrNspMMEz83yhrq7h19', // Replace with your API key
  center: [100.5018, 13.7563], // Starting position [lng, lat]
  zoom: 5 // Starting zoom level
});

// Add zoom controls
map.addControl(new maplibregl.NavigationControl());

// Add additional layers when the map is loaded
map.on('load', function () {
  map.addLayer({
    id: 'hillshading',
    type: 'raster',
    source: {
      type: 'raster',
      tiles: ['https://a.tile.opentopomap.org/{z}/{x}/{y}.png'], // OpenTopoMap tiles
      tileSize: 256,
      attribution: '&copy; OpenStreetMap contributors, SRTM | Map style: (C) OpenTopoMap (CC-BY-SA)'
    },
    layout: { visibility: 'visible' }
  });
});