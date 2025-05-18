import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkhistoryComponent } from './workhistory/workhistory.component';

const routes: Routes = [
  { path: '', component: AboutComponent },  // Default route
  { path: 'about', component: AboutComponent },  // Navigates to About page
  { path: 'skills', component: SkillsComponent }, // Corrected route
  {path:'workhistory',component: WorkhistoryComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
