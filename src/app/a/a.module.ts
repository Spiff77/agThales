import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcompComponent} from './acomp/acomp.component';
import {A1compComponent} from './a1comp/a1comp.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {BcompComponent} from '../b/bcomp/bcomp.component';
import {UserListComponent} from '../user-list/user-list.component';

const routes: Routes = [
  {path: '', component: AcompComponent},
]

@NgModule({
  declarations: [
    AcompComponent,
    A1compComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    AcompComponent
  ]
})
export class AModule { }
