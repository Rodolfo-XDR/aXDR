import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Routing } from 'src/routing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm : NgForm;

  private isError = false;
  private errorMsg = '';

  constructor(private authenticationService : AuthenticationService, private router : Router) { }

  ngOnInit() {
  }

  /*
   *    
  */
  login(f : NgForm)
  {
    console.log(f);

    this.loginForm = f;

    if(this.loginForm.value == null || undefined)
      return this.errorHandling('invalid_form');

    if(this.loginForm.value['login.identification'] == undefined || this.loginForm.value['login.password'] == undefined)
      return this.errorHandling('invalid_form');

    this.authenticationService.login(this.loginForm.value['login.identification'], this.loginForm.value['login.password'])
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([Routing.USER.url + Routing.USER.children.HABBO.directURL]);
      },
      error => {
        console.log(error)
      }
    )
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
