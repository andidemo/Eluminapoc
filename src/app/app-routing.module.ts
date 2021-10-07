import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridviewComponent } from './pages/gridview/gridview.component';

const routes: Routes = [

  
  { path: 'view', component: GridviewComponent },
  { path: '',   redirectTo: '/view', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: GridviewComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
