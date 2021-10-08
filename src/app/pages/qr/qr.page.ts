import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx'; 

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  qrData= "https://campusvirtual.duoc.cl/";
  elementType: 'url' | 'img' | 'canvas' = 'canvas';
  
  constructor(private barcodescanner: BarcodeScanner,
              private base64togallery: Base64ToGallery,
              private router:Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var datos = this.activatedRoute.snapshot.paramMap.get('valor');
  }
  user = this.activatedRoute.snapshot.paramMap.get('valor');

  volver(){
    var datos = this.user;
    this.router.navigate(['/inicio',datos]);
  }

}
