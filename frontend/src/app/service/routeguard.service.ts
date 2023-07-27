import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{

  constructor(private localStorage:LocalStorageService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    let localdata=this.localStorage.getItem()
    if(localdata){
      return true
    }
    else{
      return false
    }
  }
}
