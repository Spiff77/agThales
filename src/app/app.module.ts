import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'a', loadChildren: () => import('./a/a.module').then(m => m.AModule)},
  {path: 'b', loadChildren: () => import('./b/b.module').then(m => m.BModule)},
  {path: 'users', component: UserListComponent},

]

//export const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './i18n/', '.json');
export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
