import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut, slideInLeft, slideOutDown, slideInUp } from 'ng-animate';
import { first } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

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

  private credentials = {
    identification: null,
    password: null
  }

  private isError = false;
  private errorMsg = '';
  private ban = null;

  constructor(injector : Injector, private titleService : Title) {
    super(injector);
    this.titleService.setTitle("¡Haz amig@s, diviértete y date a conocer! - " + this.Config.siteName);
    this.credentials = {
      identification: null,
      password: null
    }
  }

  ngOnInit() {
  }
  
  signIn() {

    if(this.credentials.identification == undefined || this.credentials.password == undefined)
      return this.errorHandling('invalid_form');

    this.login(this.credentials.identification, this.credentials.password)
    .pipe(first())
    .subscribe(
      data => {},
      error => {
        if(error.error.ban != undefined)
        {
          this.ban = error.error.ban;
          this.errorHandling('banned');
        }
        else
        this.errorHandling(error.error.message)
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
      case 'banned':
        this.errorMsg = "Has sido baneado! Razón: " + this.ban.ban_reason
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
