import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  testRadioOpen: boolean;
  testRadioResult;

  

  public map_blocos = {
    blocos:[
      {
        bloco: 0,
        Latitude: -3.76888876,
        Longetude: -38.47862452,
        label: "bloco M"
      },
      {
        bloco: 1,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "bloco E"
      },
      {
        bloco: 2,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "DCE"
      },
      {
        bloco: 3,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco B"
      },
      {
        bloco: 4,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco D"
      },
      {
        bloco: 5,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco K"
      },
      {
        bloco: 6,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco H"
      },
      {
        bloco: 7,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco S"
      },
      {
        bloco: 8,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco Q"
      },
      {
        bloco: 9,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco C"
      },
      {
        bloco: 10,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco A"
      },
      {
        bloco: 11,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco F"
      },
      {
        bloco: 12,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco I"
      },
      {
        bloco: 13,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco J"
      },
      {
        bloco: 14,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco L"
      },
      {
        bloco: 15,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco O"
      },
      {
        bloco: 16,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco N"
      },
      {
        bloco: 17,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco P"
      },
      {
        bloco: 18,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco R"
      },
      {
        bloco: 19,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bloco T"
      },
      {
        bloco: 20,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Reitoria"
      },
      {
        bloco: 21,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Bliblioteca"
      },
      {
        bloco: 22,
        Latitude: -3.77025900, 
        Longetude: -38.48157500,
        label: "Centro de Convivencia"
      },
      
    ]

  }
  constructor(public alerCtrl: AlertController) {}

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

  addLine(){
    {
      let alert = this.alerCtrl.create();
      alert.setTitle('Escolha o seu destino');
  
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[0].label,
        value: 'blue',
        checked: true
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[1].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[2].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[3].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[4].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[5].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[6].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[7].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[8].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[9].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[10].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[11].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[12].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[13].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[14].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[15].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[16].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[17].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[18].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[19].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[20].label,
        value: 'green'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[21].label,
        value: 'green'
      });
     // alert.addInput({
    //    type: 'radio',
    //    label: this.map_blocos.blocos[22].label,
   //     value: 'green'
   //   });
  
  
  
  
  
      alert.addButton('Cancel');
      alert.addButton({
        text: 'Ok',
        handler: data => {
          console.log('Radio data:', data);
          this.testRadioOpen = false;
          this.testRadioResult = data;
        }
       
      });
  
      alert.present().then(() => {
        this.testRadioOpen = true;
      });
    }

  }

}