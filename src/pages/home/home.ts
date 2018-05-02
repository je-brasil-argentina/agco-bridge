import { VerMaquinaPage } from './../ver-maquina/ver-maquina';
import { AddMaquinaPage } from './../add-maquina/add-maquina';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addMaquina() {
    this.navCtrl.push(AddMaquinaPage);
  }

  verMaquina(marca, modelo, estado) {
    let params = {
      'marca': marca,
      'modelo': modelo,
      'estado': estado,
    }
    this.navCtrl.push(VerMaquinaPage, params);
  }

}
