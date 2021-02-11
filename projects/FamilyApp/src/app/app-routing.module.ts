import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TambolaComponent} from '../app/components/tambola/tambola.component';

// const routes: Routes = [];
const routes: Routes = [{ path: '', component: TambolaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
