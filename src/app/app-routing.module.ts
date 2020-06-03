import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddComponent} from './components/add/add.component';
import {GetComponent} from './components/get/get.component';
import {RandomComponent} from './components/random/random.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'get',
    component: GetComponent,
  },
  {
    path: 'random',
    component: RandomComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
