import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  regist: any[] = [];
  registCampos: any = { 
    email: '',
    password: ''
  };
  loginCampos: any = {
    email: '',
    password: ''
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    const datos = localStorage.getItem('regist');
    if (datos != null) {
      this.regist = JSON.parse(datos);
    }
  }

  registro() {
    this.regist.push(this.registCampos);
    localStorage.setItem('regist',JSON.stringify(this.regist));
    this.registCampos = {
      email: '',
      password: ''
    };
  }

  async ingreso() {
    const existeEmail = this.regist.find(m => m.email == this.loginCampos.email);
    const existeContra = this.regist.find(m => m.password == this.loginCampos.password);
    if (existeEmail != undefined && existeContra == undefined) {
      const alert = await this.alertController.create({
        header: 'Incorrecto',
        subHeader: 'La contraseña es incorrecta',
        message: 'Intentelo nuevamente',
        buttons: ['OK'],
      });
  
      await alert.present();
      } else if (existeContra != undefined && existeEmail == undefined) {
        const alert = await this.alertController.create({
          header: 'Incorrecto',
          subHeader: 'El mail no está registrado',
          message: 'Intentelo nuevamente',
          buttons: ['OK'],
        });
    
        await alert.present();
      } else if (existeEmail != undefined && existeContra != undefined) {
        const alert = await this.alertController.create({
          header: 'Perfecto',
          subHeader: 'Será redirigidx a la página principal',
          buttons: ['OK'],
        });
    
          await alert.present();
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'No coincide ningún campo',
          buttons: ['OK'],
        });
    
          await alert.present();
      }
  }
}
