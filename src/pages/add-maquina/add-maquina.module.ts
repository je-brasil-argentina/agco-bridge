import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMaquinaPage } from './add-maquina';

@NgModule({
  declarations: [
    AddMaquinaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMaquinaPage),
  ],
})
export class AddMaquinaPageModule {}
