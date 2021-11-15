import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {B1compComponent} from './b1comp/b1comp.component';

import {BcompComponent} from './bcomp/bcomp.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: BcompComponent},
]


@NgModule({
  declarations: [
    BcompComponent,
    B1compComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    BcompComponent
  ]
})
export class BModule { }
