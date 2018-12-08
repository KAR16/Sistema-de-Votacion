import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()
export class UserService{

    constructor(public afDB: AngularFireDatabase){}

    users = [];

    /*users = [
        {id: 1, name: "Oscar Caballeros", companies:[{id: 1, voto: ""}] , cui: 4585},
        {id: 2, name: "Fernando Morales", companies:[{id: 1, voto: ""}, {id:2, voto: ""}] , cui: 2315}, 
        {id: 3, name: "Carlos Benitez", companies: [{id: 1, voto: ""}, {id:2, voto: ""}, {id:3, voto:""}, {id:4, voto:""}], cui: 7896},
        {id: 4, name: "Enrique Gutierrez", companies: [{id: 1, voto: ""}, {id:2, voto: ""}, {id:3, voto:""}], cui: 1410},
        {id: 5, name: "Armando Mendoza", companies: [{id: 1, voto: ""}, {id:2, voto: ""}, {id:3, voto:""}, {id:4, voto:""}, {id:5, voto:""}], cui: 7213}
    ];*/

    public getUsers(){
        //Envío Datos Locales
        //return this.users;
        
        // Envío datos desde Firebase
        return this.afDB.list('usuarios/').valueChanges();
    }

    //Método para crear Usuarios
    public createUser(newUser){

        //this.users.push(newUser);
        //console.log(this.users);

        //Instrucción para crear usuario en firebase
        this.afDB.database.ref('usuarios/' + newUser.id).set(newUser);
    }

    public editUserData(newUser){
        console.log(newUser);
        
        //Instrucción para editar información y mandarla a firebase
        this.afDB.database.ref('usuarios/' + newUser.id).set(newUser);
    }

}