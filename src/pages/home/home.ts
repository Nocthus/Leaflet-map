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
        Latitude: -3.76882255, 
        Longetude: -38.4777281,
        label: "DCE"
      },
      {
        bloco: 3,
        Latitude: -3.770709, 
        Longetude: -38.481398,
        label: "Bloco B"
      },
      {
        bloco: 4,
        Latitude: -3.770527, 
        Longetude: -38.480448,
        label: "Bloco D"
      },
      {
        bloco: 5,
        Latitude: -3.767947, 
        Longetude: -38.480540,
        label: "Bloco H"
      },
      {
        bloco: 6,
        Latitude: -3.766780, 
        Longetude: -38.479730,
        label: "Bloco S"
      },
      {
        bloco: 7,
        Latitude: -3.769526, 
        Longetude: -38.478866,
        label: "Bloco K"
      },
      {
        bloco: 8,
        Latitude: -3.767465, 
        Longetude: -38.479424,
        label: "Bloco Q"
      },
      {
        bloco: 9,
        Latitude: -3.769740, 
        Longetude: -38.481216,
        label: "Bloco C"
      },
      {
        bloco: 10,
        Latitude: -3.771057, 
        Longetude: -38.481221,
        label: "Bloco A"
      },
      {
        bloco: 11,
        Latitude: -3.771699, 
        Longetude: -38.478126,
        label: "Bloco F"
      },
      {
        bloco: 12,
        Latitude: -3.769777, 
        Longetude: -38.479676,
        label: "Bloco I"
      },
      {
        bloco: 13,
        Latitude: -3.770045, 
        Longetude: -38.479418,
        label: "Bloco J"
      },
      {
        bloco: 14,
        Latitude: -3.770928, 
        Longetude: -38.478764,
        label: "Bloco L"
      },
      {
        bloco: 15,
        Latitude: -3.770607, 
        Longetude: -38.477517,
        label: "Bloco O"
      },
      {
        bloco: 16,
        Latitude: -3.768145, 
        Longetude: -38.479169,
        label: "Bloco N"
      },
      {
        bloco: 17,
        Latitude: -3.767802, 
        Longetude: -38.479341,
        label: "Bloco P"
      },
      {
        bloco: 18,
        Latitude: -3.767149, 
        Longetude: -38.479598,
        label: "Bloco R"
      },
      {
        bloco: 19,
        Latitude: -3.767652, 
        Longetude: -38.480242,
        label: "Bloco T"
      },
      {
        bloco: 20,
        Latitude: -3.768948, 
        Longetude: -38.481508,
        label: "Reitoria"
      },
      {
        bloco: 21,
        Latitude: -3.768851, 
        Longetude: -38.480660,
        label: "Bliblioteca"
      },
      {
        bloco: 22,
        Latitude: -3.769194, 
        Longetude: -38.479652,
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
      let marker: any = leaflet.marker([-3.767465, -38.479424]).bindPopup('Você está aqui!!').openPopup();  
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })

   

  }

  addLine(){
    {
      let alert = this.alerCtrl.create();
      alert.setTitle('Escolha o seu destino');
  
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[0].label,
        value: '0',
        checked: true
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[1].label,
        value: '1'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[2].label,
        value: '2'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[3].label,
        value: '3'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[4].label,
        value: '4'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[5].label,
        value: '5'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[6].label,
        value: '6'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[7].label,
        value: '7'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[8].label,
        value: '8'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[9].label,
        value: '9'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[10].label,
        value: '10'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[11].label,
        value: '11'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[12].label,
        value: '12'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[13].label,
        value: '13'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[14].label,
        value: '14'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[15].label,
        value: '15'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[16].label,
        value: '16'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[17].label,
        value: '17'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[18].label,
        value: '18'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[19].label,
        value: '19'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[20].label,
        value: '20'
      });
      alert.addInput({
        type: 'radio',
        label: this.map_blocos.blocos[21].label,
        value: '21'
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
          let marker: any = leaflet.marker([this.map_blocos.blocos[parseInt(data)].Latitude, this.map_blocos.blocos[parseInt(data)].Longetude]).bindPopup(this.map_blocos.blocos[parseInt(data)].label).openPopup();
          let polyline: any = leaflet.polyline([[-3.767465, -38.479424],[this.map_blocos.blocos[parseInt(data)].Latitude, this.map_blocos.blocos[parseInt(data)].Longetude]]);
          this.map.addLayer(polyline);
          this.map.addLayer(marker);
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