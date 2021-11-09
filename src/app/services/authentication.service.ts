import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // navegacnion entre paginas
import { Platform } from '@ionic/angular'; //manejar estado de pag
import { Storage } from '@ionic/storage'; //utilizar la memoria local
import { BehaviorSubject } from 'rxjs'; //comportamiento varibles

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //variable que controla al user
  authStage = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private platform: Platform,
    private storage: Storage 
  ) { }

  login(nombre, pass){
    if(nombre == "" && pass==""){
      this.authStage.next(true);
      this.router.navigate([''])
    }else{

    }
  }

  logout(){
    this.router.navigate(['home']);
    this.authStage.next(false);
  }

  isAuthenticated():boolean{
    return this.authStage.value;
  }








}
