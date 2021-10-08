import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}
  recu(){
    this.router.navigate(['/recu']);
  }
  usu = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
    contra: new FormControl('',[Validators.required,Validators.minLength(3)])
  })

  value(){
    if(this.usu.controls.nombre.value == 'alumno' && this.usu.controls.contra.value == '123'){
      var datos = 'alumno'
      this.router.navigate(['/inicio',datos]);
    }
    else if(this.usu.controls.nombre.value == 'profesor' && this.usu.controls.contra.value == '123'){
      var datos = 'profesor'
      this.router.navigate(['/inicio',datos]);
    }
    else{
      alert('Error')
    }
  }
}
