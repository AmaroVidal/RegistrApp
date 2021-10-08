import { Component, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router:Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var datos = this.activatedRoute.snapshot.paramMap.get('valor');
  }
  user = this.activatedRoute.snapshot.paramMap.get('valor');
  
  cerrar(){
    this.router.navigate(['/home']);
  }
  pagQr(){
    var datos = this.user;
    this.router.navigate(['/qr',datos]);
    }

  mostrarProfesor(){
    if (this.user == 'profesor') {
      return true;
    }
    else{
      return false;
    }
  }
  mostrarAlumno(){
    if (this.user == 'alumno') {
      return true;
    }
    else{
      return false;
    }
  }
 

}
