import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/users.service';
import { VotosPage } from '../../pages/votos/votos';
import { NewUserPage } from '../../pages/new-user/new-user';

import swal from 'sweetalert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users = [];
  
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public userService: UserService, public navParams : NavParams) {

    //Guardo los datos locales
    //this.users = userService.getUsers();

    //Guardo los datos que vienen de Firebase
    userService.getUsers().subscribe(usuarios => {
      console.log(usuarios);
      
      this.users = usuarios;
      //this.users.push(usuarios);
      //console.log(this.users);
      
    });
  }
  public cui;
  public clave;
  palabraClave = "luna";
  
  //Función para emitir voto
  emitirVoto() {
    console.log('voto');
    
    if (this.cui && this.clave){

      for (let i = 0; i < this.users.length; i++) {
          
        console.log(parseInt(this.cui), this.users[i].cui);
        console.log(this.clave, this.palabraClave);
        if (parseInt(this.cui) == this.users[i].cui && this.clave == this.palabraClave){
          for (let index = 0; index < this.users[i].companies.length; index++) {
            console.log(this.users[i].companies[index].voto);

            if (this.users[i].companies[index].voto == "" && index == this.users[i].companies.length - 1 ) {
              console.log("Coincidencia");
              console.log("Usuario: ", this.users[i].name);
              console.log("CUI: ", this.cui);
              console.log("Palabra Clave: ", this.clave);
    
              this.cui = "";
              this.clave = "";
    
              this.navCtrl.push(VotosPage, this.users[i]);
            }else if(index == this.users[i].companies.length - 1) {
              swal("¡Atención!", "Voto de usuario emitido.", "warning");
            }
          }
          break;
        }else if (i == this.users.length - 1){
          swal("¡Error!", "CUI o palabra clave erroneos.", "error");
        }

      }

    }else{
      swal("¡Atención!", "Complete los campos.", "warning");
    }

  }

  crearUsuario(){
    this.navCtrl.push(NewUserPage, this.users);
  }

}
