import { Injectable } from "@angular/core";
// import { resolve } from "dns";
// import { rejects } from "assert";

@Injectable()
export class AuthService{
    loggedIn =  true;

    
    isAuthenticated(){
        const promise = new Promise( //promise
            ( resolve, rejects) =>{
                setTimeout(
                    () => {
                        resolve(this.loggedIn)
                    }
               ,800 )
            }
        );

        return promise;
    }
    
    login(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }
}