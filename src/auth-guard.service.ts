import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./app/auth.service";
import { Injectable } from "@angular/core";


@Injectable()  //injecting service into another

export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authservice:AuthService,private router:Router){}

    canActivate( // Guard for root link
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        
         return this.authservice.isAuthenticated().
              then(
                 (authenticated: boolean) => {
                    if(authenticated){
                        return true;
                    }else{
                        this.router.navigate(['/'])
                    }
                 }
              ) 
    }

    canActivateChild( // Guard for child links
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state);
    }
}