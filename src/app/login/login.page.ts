import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { RegistroPage } from '../registro/registro.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin = FormGroup;

  constructor(public fb: FormBuilder) { }
 
  

  ngOnInit() {
  }

  

}
