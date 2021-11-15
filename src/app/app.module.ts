import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AModule} from './a/a.module';
import {BModule} from './b/b.module';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'a', loadChildren: () => import('./a/a.module').then(m => m.AModule)},
  {path: 'b', loadChildren: () => import('./b/b.module').then(m => m.BModule)},
  {path: 'users', component: UserListComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
