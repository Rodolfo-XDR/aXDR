import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../shared/session.service';
import { ConstantPool } from '@angular/compiler';
import { Routing } from 'src/routing';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router : Router, private sessionService : SessionService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {     
    
    if(!this.sessionService.IsLogged.value)
    {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('currentUser') == undefined)
    {
      this.sessionService.IsLogged.next(false);
      this.router.navigate(['/']);
      return false;
    }

    this.sessionService.pingStatus();
      
    if(!this.sessionService.IsLogged.value)
    {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
