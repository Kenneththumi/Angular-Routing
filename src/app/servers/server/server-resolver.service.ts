
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server{
    id:number;
    name:string;
    status:string;
}

@Injectable()

export class ServerResolver implements Resolve<Server>{
    constructor(private server:ServersService){}

   //Definition of a resolve
   resolve(route:ActivatedRouteSnapshot, status:RouterStateSnapshot): Observable<Server> | Promise<Server> | Server{
       return this.server.getServer(+route.params['id'])
   }
}