import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the VerMaquinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-maquina',
  templateUrl: 'ver-maquina.html',
})
export class VerMaquinaPage {

  marca: any;
  modelo: any;
  estado: any;
  randomSerial: any;
  manutencoes: any;
  opciones: any;
  hsUso = 152;
  suceso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.marca = navParams.get('marca');
    this.modelo = navParams.get('modelo');
    this.estado = navParams.get('estado');
    this.randomSerial = this.generateSerialKeys(10, '');
    this.opciones = [
      { 'fecha': '27/05', 'descripcion': 'Troca Baterías', 'img': 'assets/imgs/battery.png' },
      { 'fecha': '06/06', 'descripcion': 'Revisao dos filtros', 'img': 'assets/imgs/filters.png' },
      { 'fecha': '08/12', 'descripcion': 'Troca de óleos lubrificantes', 'img': 'assets/imgs/oil.png' },
      { 'fecha': '25/12', 'descripcion': 'Troca Baterías', 'img': 'assets/imgs/battery.png' },
    ];

    this.manutencoes = [
      { 'fecha': '27/05', 'descripcion': 'Troca Baterías', 'img': 'assets/imgs/battery.png' },
      { 'fecha': '06/06', 'descripcion': 'Revisao dos filtros', 'img': 'assets/imgs/filters.png' },
      { 'fecha': '08/12', 'descripcion': 'Troca de óleos lubrificantes', 'img': 'assets/imgs/oil.png' },
      { 'fecha': '25/12', 'descripcion': 'Troca Baterías', 'img': 'assets/imgs/battery.png' }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerMaquinaPage');
  }

  generateSerialKeys(length, separator) {
    separator = separator || '-';
    var license = new Array(length + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, length);
    return license.toUpperCase().replace(/(\w{4})/g, '$1' + separator).substr(0, length + Math.round(length / 4) - 1);
  }

  addHs() {
    let prompt = this.alertCtrl.create({
      title: 'Adicionar HS',
      message: "ingrese hs",
      inputs: [
        {
          name: 'hs',
          placeholder: 'Hs'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.hsUso += parseInt(data.hs);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  addSuceso(suceso) {
    this.opciones.push(suceso)    
  }


}
