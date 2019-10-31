import { Component, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { first } from 'rxjs/operators';
import { Routing } from 'src/routing';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut, slideInLeft, slideOutDown, bounceInRight } from 'ng-animate';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } )),
      transition(':leave', useAnimation(fadeOut, { params: { timing: 1 } } ))
    ]),
    trigger('slideInOut', [
      transition(':enter', useAnimation(slideInLeft, { params: { timing: 0.3 } } )),
      transition(':leave', useAnimation(slideOutDown, { params: { timing: 1 } } ))
    ]),
    trigger('bounceInRight', [
      transition(':leave', useAnimation(bounceInRight, { params: { timing: 0.5 } }))
    ])
  ]
})
export class RegisterComponent extends BaseComponent implements OnInit {

  private registrationForm = {
    username: null,
    mail: null,
    password: null,
    passwordConfirm: null,
    tos: false,
    reCAPTCHA: false
  };

  private isError = false;
  private errorMsg = '';

  constructor(injector : Injector, private location : Location) {
    super(injector);
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  //TODO Improve this void
  addUser(form: NgForm) {
    if(form.value == null || undefined || !form.valid)
    return this.errorHandling('invalid_form');

    this.registrationForm = {
      username: form.value["registration.username"],
      mail: form.value["registration.mail"],
      password: form.value["registration.password"],
      passwordConfirm: form.value["registration.passwordConfirm"],
      tos: form.value["registration.tos"],
      reCAPTCHA: this.registrationForm.reCAPTCHA
    }

    if(this.registrationForm.username == undefined || this.registrationForm.mail == undefined || this.registrationForm.password == undefined || this.registrationForm.passwordConfirm == undefined)
      return this.errorHandling('invalid_form');
      
    if(!this.registrationForm.tos || this.registrationForm.tos == undefined)
      return this.errorHandling('tos_validation');

    if(!this.registrationForm.reCAPTCHA)
      return this.errorHandling('invalid_recaptcha');
  
    this.register(this.registrationForm.username, this.registrationForm.mail, this.registrationForm.password);
  }

  resolved(captchaResponse) {
    this.registrationForm.reCAPTCHA = true;
  }

  errorHandling(error : String) {

    this.isError = true;

    switch(error)
    {
      case 'invalid_form':
        this.errorMsg = "No has completado correctamente el registro, intenta de nuevo."
        break;
      case 'invalid_recaptcha':
        this.errorMsg = "Por favor, comprueba que no eres un robot"
        break;
      case 'max_accounts':
        this.errorMsg = "Has alcanzado el limite de registros.";
        break;
      case 'username_unavailable':
        this.errorMsg = "El nombre de usuario proporcionado ya está en uso.";
        break;
      case 'email_unavailable':
        this.errorMsg = "El correo electrónico proporcionado ya está en uso.";
        break;
      case 'tos_validation':
        this.errorMsg = "Por favor, debes aceptar los términos";
        break;
      case 'invalid_parameters':
      case 'invalid_localStorage':
      default:
        this.errorMsg = "Ha ocurrido un Error (" + error + ")";
        break;
    }

    setTimeout(() => this.resetError(), 5000);
  }

  resetError() 
  {
    this.isError = false;
    this.errorMsg = "";
  }

}
