import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/users.service';

import swal from 'sweetalert';


@IonicPage()
@Component({
  selector: 'page-new-user',
  templateUrl: 'new-user.html',
})
export class NewUserPage {

  Usuarios;
  companies = null;
  codigoUsuario = null;

  newUser = {
    id: Date.now(),
    name: "",
    companies:[],
    cui: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    //this.Usuarios = this.navParams.data;

    userService.getUsers().subscribe(usuarios => {
      console.log(usuarios);
      
      this.Usuarios = usuarios;
      //this.users.push(usuarios);
      //console.log(this.users);
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewUserPage');
  }

  
  crearUsuario(){

    if (this.newUser.name == "" || this.codigoUsuario == null || this.companies == null) {
      swal("¡Atención!", "Complete los campos.", "warning");
    }else{

      if(this.Usuarios.length != 0){
        console.log("El array no está vacío");

        for (let index = 0; index < this.Usuarios.length; index++) {
          console.log(this.Usuarios[index].cui);

          if (this.codigoUsuario == this.Usuarios[index].cui) {
            swal("¡Error!", "CUI ya existe.", "error");
            break;
          }else if (index == this.Usuarios.length - 1){
            this.newUser.cui = parseInt(this.codigoUsuario);
            if (this.companies > 0) {
              for (let index = 0; index < this.companies; index++) {
                var companyUser = {id: index + 1, voto: ""};
                this.newUser.companies[index] = companyUser;
              }
              //this.newUser.id = (this.Usuarios.length) + 1;
              this.userService.createUser(this.newUser);
              //this.Usuarios.push(this.newUser);
            }
            
            swal("¡Excelente!", "Usuario creado éxitosamente.", "success");
            
            this.newUser = {
              id: Date.now(),
              name: "",
              companies:[],
              cui: 0
            };
            this.companies = null;
            this.codigoUsuario = null;
            console.log(this.newUser);
            console.log(this.Usuarios);
            break;
          }
          
        }
        
      }else{
        this.newUser.cui = parseInt(this.codigoUsuario);
        if (this.companies > 0) {
          for (let index = 0; index < this.companies; index++) {
            var company = {id: index + 1, voto: ""};
            this.newUser.companies[index] = company;
          }
          //this.newUser.id = 1;
          this.userService.createUser(this.newUser);
          //this.Usuarios.push(this.newUser);
        }
        
        swal("¡Excelente!", "Usuario creado éxitosamente.", "success");
        console.log(this.newUser);
        this.newUser = {
          id: Date.now(),
          name: "",
          companies:[],
          cui: 0
        };
        this.companies = null;
        this.codigoUsuario = null;
        console.log(this.Usuarios);

      }
        
      }
      
  }

}
