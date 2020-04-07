import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//import { Routes, RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from 'src/auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';



// //routes
// const appRoutes:Routes= [
//     { path:'', component:HomeComponent},
//     { path:'users', component:UsersComponent , children://child links definition
//       [     
//          { path:':id/:name', component:UserComponent }, 
//       ]
//     },
//     { path:'servers', component:ServersComponent, children:[        
//           { path:':id', component:ServerComponent},
//           { path:':id/edit', component:EditServerComponent}
//     ]},
//     { path:'page-not-found', component:PageNotFoundComponent},
//     { path:'**', redirectTo:'/page-not-found', pathMatch:'full'}

// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes)
    AppRoutingModule  //Routes imported
  ],
  providers: [ServersService, AuthGuard, AuthService, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
