import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/auth-guard.service";

//components
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";



//routes
const appRoutes:Routes= [
    { path:'', component:HomeComponent},
    { path:'users', component:UsersComponent , children://child links definition
      [     
         { path:':id/:name', component:UserComponent }, 
      ]
    },
    { path:'servers', 
       canActivate:[AuthGuard], 
      //canActivateChild:[AuthGuard], //guard access to children links
      component:ServersComponent, 
      children:[        
          { path:':id', component:ServerComponent},
          { path:':id/edit', component:EditServerComponent}
      ]
    },
    { path:'page-not-found', component:PageNotFoundComponent},
    { path:'**', redirectTo:'/page-not-found', pathMatch:'full'}

]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule   //Encompasses the only part of this module that should be seen in the imported module 
    ]
})

export class AppRoutingModule{

}