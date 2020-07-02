import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { DetailModule} from './detail/detail.module';


const routes: Routes = [
  {
    path: '', 
    loadChildren: () =>HomeModule,
  },
  {
    path:'login',
    loadChildren: () =>LoginModule,
  },
  {
    path:'home',
    loadChildren: () =>HomeModule,
  },
  {
    path:'detail/:id',
    loadChildren: () =>DetailModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
