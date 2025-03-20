

// Define the image bounds
// These are the coordinates of the corners of the image
const imageBounds = [
    [0, 0], // Bottom-left corner
    [4000, 8000] // Top-right corner (adjust based on your image dimensions)
];

const halfBounds = [
    [0, 0], // Bottom-left corner
    [4000, 8000] // Top-right corner (adjust based on your image dimensions)
];


// Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple, // Use simple coordinates (not geographical)
    maxBounds: imageBounds,
    maxBoundsViscosity: 1.0,
    worldCopyJump: false,
    minZoom: -2, // Allow zooming out
    maxZoom: 0, // Allow zooming in
}); // Center the map at [0, 0] with zoom level 0


// Add the image overlay
L.imageOverlay('/images/galaksijaPhotoshop.png', imageBounds).addTo(map);

// Set the map's maximum bounds to the image bounds
map.setMaxBounds(imageBounds);
map.setView([2000, 4000], -2);

// pronadi sve project elemente i spremi njihov html u dict za popupove

// Select all elements with the class 'project'
const projectElements = document.querySelectorAll('.project');

// Create an empty dictionary (object) to store the HTML content
const projectsDictionary = {};

// Iterate over the elements
projectElements.forEach((element, index) => {
    // Use a unique identifier as the key
    const key = element.id || `project-${index}`; // Fallback to index if no ID is present
  
    // Store the element's innerHTML in the dictionary
    projectsDictionary[key] = element.innerHTML;
});

  


// Nadi sve pozicije zvijezda

var clusterCentar = [2403, 4442];
var clusterLinija1 = [2357, 4076];
var clusterLinija2 = [2284, 4114];
var clusterLinija3 = [2189, 4253];
var clusterGore1 = [2511, 4235];
var clusterDesno = [2445, 4683];
var openGLZvijezda = [1989, 5169];
var portfolio = [1180, 5161];
var parking = [1266, 3570];

var unityCircle = '#363F5A';
var d3Inside = '#143EBB';
var d2Inside = '#D65A31';
var vrInside = '#1DECE7';
var flutterCircle = '#02E5F3';
var appInside = '#5FF302';
var pageCircle = '#21A804';
var pageInside = '#353F32';

var stribor = L.circle(clusterLinija1, {
    color: unityCircle,
    fillColor: d3Inside,
    fillOpacity: 0.5,
    radius: 20
}).bindPopup(projectsDictionary["stribor"])
.addTo(map);

var ribanje = L.circle(clusterGore1, {
    color: unityCircle,
    fillColor: d2Inside,
    fillOpacity: 0.5,
    radius: 20
}).bindPopup(projectsDictionary["ribanje"]).addTo(map);

var jusuf = L.circle(clusterCentar, {
    color: unityCircle,
    fillColor: d3Inside,
    fillOpacity: 0.5,
    radius: 20
}).bindPopup(projectsDictionary["jusuf"]).addTo(map);

var macaklini = L.circle(clusterDesno, {
    color: unityCircle,
    fillColor: d2Inside,
    fillOpacity: 0.5,
    radius: 20
}).bindPopup(projectsDictionary["macaklini"]).addTo(map);

var matchmaker = L.circle(clusterLinija2, {
    color: unityCircle,
    fillColor: vrInside,
    fillOpacity: 0.5,
    radius: 20
}).bindPopup(projectsDictionary["matchmaking"]).addTo(map);

var raytracing = L.circle(clusterLinija3, {
    color: unityCircle,
    fillColor: d3Inside,
    fillOpacity: 0.5,
    radius: 20
}).bindPopup(projectsDictionary["raytracing"]).addTo(map);

var openGL = L.circle(openGLZvijezda, {
    color: 'white',
    fillColor: d3Inside,
    fillOpacity: 0.5,
    radius: 20
}).bindPopup(projectsDictionary["opengl"]).addTo(map);

var portfolioCircle = L.circle(portfolio, {
    color: pageCircle,
    fillColor: pageInside,
    fillOpacity: 0.5,
    radius: 20
}).bindPopup(projectsDictionary["portfolio"]).addTo(map);

var parkingCircle = L.circle(parking, {
    color: flutterCircle,
    fillColor: appInside,
    fillOpacity: 0.5,
    radius: 20
}).bindPopup(projectsDictionary["parking"]).addTo(map);





// Get references to the toggle button and views
const toggleButton = document.getElementById('toggle-view');
const mapView = document.getElementById('map-view');
const columnsView = document.getElementById('columns-view');

// Add event listener to the toggle button
toggleButton.addEventListener('click', function () {
    if (mapView.style.display === 'none' || mapView.style.display === '') {
        // Switch to Map View
        console.log("Ukljucio mapu");
        mapView.style.display = 'block';
        map.invalidateSize();
        columnsView.style.display = 'none';
        toggleButton.textContent = 'Switch View';
    } else {
        // Switch to Columns View
        console.log("Iskljucio mapu");
        mapView.style.display = 'none';
        columnsView.style.display = 'grid';
        toggleButton.textContent = 'Switch View';
    }
});