import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/users.service';

@IonicPage()
@Component({
  selector: 'page-votos',
  templateUrl: 'votos.html',
})
export class VotosPage {
  
  userObject;
  companiesObject;
  //nombreUsuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    
    //this.nombreUsuario = navParams.get('name');
    this.userObject = this.navParams.data;
    this.companiesObject = this.userObject.companies;
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotosPage');
  }

  voto(resultado, index){
    console.log(resultado, index);
    
  }

  emitirVoto(){

    for (let index = 0; index < this.companiesObject.length; index++) {
      if (this.companiesObject[index].voto == "") {
        console.log("Falta voto " + this.companiesObject[index].id);
        swal("¡Atención!", "Falta emitir voto "+ this.companiesObject[index].id +".", "warning");
        break;
      }else if (index == this.companiesObject.length - 1) {
        swal("¡Excelente!", "Voto realizado.", "success");
        console.log(this.userObject);
        this.userService.editUserData(this.userObject);
        this.navCtrl.pop();
      }
      
    }
    
  }
}
