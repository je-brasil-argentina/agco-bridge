import { CadastroPage } from './../cadastro/cadastro';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goHome(){
    console.log('hola')
    // this.navCtrl.push(HomePage);
    // this.nav.setRoot = HomePage;
    this.navCtrl.setRoot(HomePage);
  }
  goCadastro(){
    this.navCtrl.setRoot(CadastroPage);
    // this.navCtrl.push(CadastroPage);
  }

}
