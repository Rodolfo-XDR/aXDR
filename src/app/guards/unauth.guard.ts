import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Routing } from 'src/routing';
import { SessionService } from '../shared/session.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate, CanActivateChild {
  constructor(private router : Router, private sessionService : SessionService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {     
    if(this.sessionService.IsLogged.value)
    {
      this.router.navigate([Routing.USER.url + Routing.USER.children.HABBO.directURL]);
      return false;
    }

    return true;
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.sessionService.IsLogged.value)
    {
      this.router.navigate([Routing.USER.url + Routing.USER.children.HABBO.directURL]);
      return false;
    }

    return true;
  }
  
}
