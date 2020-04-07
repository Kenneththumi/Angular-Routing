import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean = false;
  changeSaved = false;

  constructor(private serversService: ServersService, 
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
   const id = +this.route.snapshot.params['id']//get server id from link
    this.server = this.serversService.getServer(id);
    //using subscribe - on reloading same page when there are params
    // this.route.params.subscribe(
    //   (params:Params) =>{
    //     const id = params['id'];
    //     this.server = this.serversService.getServer(id);
    //   }
    // )
    
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    //get queryparams
    this.route.queryParams.subscribe(
       (queryparams:Params) => {
          this.allowEdit = queryparams['allowEdit']==='1'? true : false;
       }
        
    )
    //console.log(this.server);
    
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});

    this.changeSaved = true;

    //Load the previous link, in this case its the server that was loaded for editing
    this.router.navigate(['../'],{relativeTo:this.route, queryParamsHandling:'preserve'});
  }
  
  //our method from CanComponentDeactivate interface
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
         return true;
    }

    if(  (this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changeSaved  ){
        return confirm(" Are you sure you want to leave without making any changes?");
    }else{
      return true;
    }
  }

}
