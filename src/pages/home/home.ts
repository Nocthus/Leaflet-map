import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Matheus',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 20
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([-3.76882255, -38.47772811]).bindPopup('DCE').openPopup();   
      let marker2: any = leaflet.marker([-3.76888876, -38.47862452]).bindPopup('Bloco M').openPopup();
      let marker3: any = leaflet.marker([-3.77025900, -38.48157500]).bindPopup('Bloco A').openPopup();
      let marker4: any = leaflet.marker([-3.770709, -38.481398]).bindPopup('Bloco B').openPopup();
      let marker5: any = leaflet.marker([-3.770527, -38.480448]).bindPopup('Bloco B').openPopup();
      let marker6: any = leaflet.marker([-3.767947, -38.480540]).bindPopup('Bloco B').openPopup();
      let marker7: any = leaflet.marker([-3.766780, -38.479730]).bindPopup('Bloco B').openPopup();
      let marker8: any = leaflet.marker([-3.769526, -38.478866]).bindPopup('Bloco B').openPopup();
      let marker9: any = leaflet.marker([-3.767465, -38.479424]).bindPopup('Bloco B').openPopup();
      let polyline: any = leaflet.polyline([[-3.76888876, -38.47862452],[-3.76882255, -38.47772811]]);
      markerGroup.addLayer(marker);
      markerGroup.addLayer(marker2);
      markerGroup.addLayer(marker3);
      markerGroup.addLayer(marker4);
      markerGroup.addLayer(marker5);
      markerGroup.addLayer(marker6);
      markerGroup.addLayer(marker7);
      markerGroup.addLayer(marker8);
      markerGroup.addLayer(marker9);
      markerGroup.addLayer(polyline);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })

    leaflet.Routing.control({
      router: leaflet.Routing.osrmv1({
          serviceUrl: `http://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
      lineOptions: {styles: [{color: '#242c81', weight: 7}]},
      fitSelectedRoutes: false,
      altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
      show: false,
      routeWhileDragging: true,
      waypoints: [
          leaflet.latLng(-3.76882255, -38.47772811),
          leaflet.latLng(-3.76888876, -38.47862452)
      ]
  }).addTo(this.map);

  }

}