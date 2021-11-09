import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router,
              private alertController: AlertController,
              private auth: AuthenticationService) {}
  recu(){
    this.router.navigate(['/recu']);
  }
  usu = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
    contra: new FormControl('',[Validators.required,Validators.minLength(3)])
  })
  
  ingresar(){
    alert(this.usu.controls.nombre.value+this.usu.controls.contra.value)
    this.auth.login(this.usu.controls.nombre.value,this.usu.controls.contra);
  }

  async value(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Error!',
      subHeader: 'Usuario o contraseña incorrecta',
      message: 'Intente nuevamente',
      buttons: ['OK']
    });

    if(this.usu.controls.nombre.value == 'alumno' && this.usu.controls.contra.value == '123'){
      var datos = 'alumno'
      this.router.navigate(['/inicio',datos]);
    }
    else if(this.usu.controls.nombre.value == 'profesor' && this.usu.controls.contra.value == '123'){
      var datos = 'profesor'
      this.router.navigate(['/inicio',datos]);
    }
    else{
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  }
}
