import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
})
export class RecuPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  persona = new FormGroup({
    usuario: new FormControl('',[Validators.required,Validators.email])
  });
  async val(){
    var nombre = this.persona.controls.usuario.value;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Succes!',
      subHeader: nombre,
      message: 'Se ah enviado un correo para cambiar la contraseña',
      buttons: ['OK']
    })
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
