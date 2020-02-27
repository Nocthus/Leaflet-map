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
      let marker: any = leaflet.marker([-3.76882255, -38.47772811]).on('click', () => {
        alert('Marker clicked');   
      })
      let marker2: any = leaflet.marker([-3.76888876, -38.47862452]);
      let polyline: any = leaflet.polyline([[-3.76888876, -38.47862452],[-3.76882255, -38.47772811]]);
      markerGroup.addLayer(marker);
      markerGroup.addLayer(marker2);
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