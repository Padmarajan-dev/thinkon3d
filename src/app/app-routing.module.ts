import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path:'test',
  //   loadChildren:()=>import('./testing/testing.module').then(m=>m.TestingModule)
  // },
  {
    path:'',
    loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
