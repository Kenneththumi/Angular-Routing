import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean;
  changeSaved = false;

  constructor(private serversService: ServersService, 
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);//get server id from link
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    //get queryparams
    this.route.queryParams.subscribe(
       (params:Params) => {
          this.allowEdit = params['allowEdit']==='1'? true : false;
       }
        
    )
    //console.log(this.server);
    
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});

    this.changeSaved = true;

    //Load the previous link, in this case its the server that was loaded for editing
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
