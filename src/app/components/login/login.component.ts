import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut, slideInLeft, slideOutDown, slideInUp } from 'ng-animate';
import { first } from 'rxjs/operators';
import { Routing } from 'src/routing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } )),
      transition(':leave', useAnimation(fadeOut, { params: { timing: 1 } } ))
    ]),
    trigger('slideInOut', [
      transition(':enter', useAnimation(slideInLeft, { params: { timing: 0.3 } } )),
      transition(':leave', useAnimation(slideOutDown, { params: { timing: 1 } } ))
    ]),
    trigger('bounceDown', [
      transition(':enter', useAnimation(slideInUp, { params: { timing: 0.5 } }))
    ])
  ]
})
export class LoginComponent extends BaseComponent implements OnInit {

  private loginForm = {
    identification: null,
    password: null
  };

  private isError = false;
  private errorMsg = '';

  private logStatus : boolean = false;

  constructor(injector : Injector, private router : Router) {
    super(injector);
  }

  ngOnInit() {
    this.isLogged.subscribe(v => this.logStatus = v);
  }

  connect(form : NgForm) {

    if(form.value == null || undefined || !form.valid)
      return this.errorHandling('invalid_form');

    this.loginForm = {
      identification: form.value["login.identification"],
      password: form.value["login.password"]
    }

    if(this.loginForm.identification == undefined || this.loginForm.password == undefined)
      return this.errorHandling('invalid_form');

    this.login(this.loginForm.identification, this.loginForm.password)
    .pipe(first())
    .subscribe(
      data => {
        if(localStorage.getItem('currentUser') == undefined || null)
          this.errorHandling('invalid_localStorage');

        this.router.navigate([Routing.USER.url + Routing.USER.children.HABBO.directURL]);
      }, 
      err => {

        if(err.error.message == 'valid_session')
          this.router.navigate([Routing.USER.url + Routing.USER.children.HABBO.directURL]);

        this.errorHandling(err.error.message)
      });
  }

  /*
   * @desc Set error on the component and identify the error message to be displayed in the view.
   * @param {string} error code
  */
  errorHandling(error : String) {
    this.isError = true;

    switch(error)
    {
      case 'invalid_form':
        this.errorMsg = "Debes rellenar todos tus datos correctamente";
        break;
      case 'wrong_password':
      case 'user_not_found':
        this.errorMsg = "Los datos proporcionados son incorrectos";
        break;
      case 'invalid_parameters':
      case 'invalid_localStorage':
      default:
        this.errorMsg = "Ha ocurrido un Error (" + error + ")";
        break;
    }

    setTimeout(() => this.resetError(), 5000);
  }

  /*
   * Resets the errorMsg to empty string and error sets to false. 
   */
  resetError() 
  {
    this.isError = false;
    this.errorMsg = "";
  }
}
