import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    emaill: '',
    passwordd: ''
  }

  constructor(public fb: FormBuilder, private alertController: AlertController) { }

  ngOnInit() {
    const datos = localStorage.getItem('regist');
    if (datos != null) {
      this.regist = JSON.parse(datos);
    }
  }


  registro() {
    
     
    if (this.regist.find(m => m.email == this.registCampos.email)) {
      alert("El email ya está registrado")
    } else {
      this.regist.push(this.registCampos);
    localStorage.setItem('regist',JSON.stringify(this.regist));
    this.registCampos = {
      email: '',
      password: ''
    };
    alert("Todo bien")
    }
  }

  async ingreso() {
    const existeEmail = this.regist.find(m => m.email == this.loginCampos.emaill);
    const existeContra = this.regist.find(m => m.password == this.loginCampos.passwordd);
    if (existeEmail == undefined) {
      const alert = await this.alertController.create({
        header: 'Incorrecto',
        subHeader: 'El mail no está registrado',
        message: 'Intentelo nuevamente',
        buttons: ['OK'],
      });
  
      await alert.present();
      } else if ( existeContra == undefined) {
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'La contraseña es incorrecta',
          message: 'Intentelo nuevamente',
          buttons: ['OK'],
        });
    
        await alert.present();
      
      
      } else {
        const alert = await this.alertController.create({
          header: 'Perfecto',
          subHeader: 'Ir a la página',
          buttons: ['OK'],
        });
    
          await alert.present();
      }
  }
}
