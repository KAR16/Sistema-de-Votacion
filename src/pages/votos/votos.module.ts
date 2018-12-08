import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotosPage } from './votos';

@NgModule({
  declarations: [
    VotosPage,
  ],
  imports: [
    IonicPageModule.forChild(VotosPage),
  ],
})
export class VotosPageModule {}
