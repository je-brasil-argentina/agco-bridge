import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the AddMaquinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-maquina',
  templateUrl: 'add-maquina.html',
})
export class AddMaquinaPage {

  marca: any;
  modelo: any;
  aModelo: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMaquinaPage');
  }

  cadastrarMaquina() {
    let toast = this.toastCtrl.create({
      message: 'Máquina Cadastrada!',
      duration: 3000
    });
    toast.present();
    this.navCtrl.pop();
  }

  loadModelo(marca) {
    console.log('entra?', marca)
    if (marca == 'mf') {
      this.aModelo = [
        { "valor": '1', "nombre": 'MF 6690' },
        { "valor": '2', "nombre": 'MF 6700' }
      ]
    }
    if (marca == 'valtra') {
      this.aModelo = [
        { "valor": '3', "nombre": 'A750E' },
        { "valor": '4', "nombre": '7814' }
      ]
    }
  }


}
