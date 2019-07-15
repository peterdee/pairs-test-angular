import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PairsComponent } from './pairs/pairs.component';

const routes: Routes = [
  { path: '', component: PairsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
