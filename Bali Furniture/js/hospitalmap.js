var map = L.map('map').setView([-8.62274, 115.16862], 10);

	var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);

coords = [ [-8.62274, 115.16862]];
capacity = ['Bali Furniture' ]
//pasien
bor = ["70%","65%","68%","75%","80%","55%"]
//ruangan
room = [1300,715,333,809,665,250]
//images
images = ["img/hospital.png", "img/hospital.png", "img/hospital.png", "img/hospital.png", "img/hospital.png", "img/hospital.png" ]




let l = coords.length;

//click rs rujukan to point on maps target
var clickmap1 = document.querySelector('#clickmap1');
var clickmap2 = document.querySelector('#clickmap2');
var clickmap3 = document.querySelector('#clickmap3');
var clickmap4 = document.querySelector('#clickmap4');
var clickmap5 = document.querySelector('#clickmap5');
var clickmap6 = document.querySelector('#clickmap6');

clickmaps = [clickmap1, clickmap2, clickmap3, clickmap4, clickmap5, clickmap6]


for (let i = 0; i < l; i++){
    //popups
    var pop = L.popup({
        closeOnClick: true
    }).setContent('<h4>Bali Furniture</h4><img src=' + images[i] + ' style="height: 80px">');
    //markers
    var marker = L.marker(coords[i]).addTo(map).bindPopup(pop);
    //labels
    var toollip = L.tooltip({
        permanent: true
    }).setContent(capacity[i]);

    marker.bindTooltip(toollip);

    //zoom in / fly to
    clickmaps[i].addEventListener("mouseover", ()=> {
       map.flyTo(coords[i], 16);
    })

}



