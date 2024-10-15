import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'about', component: AboutComponent }, // About route
  { path: 'skills', component: SkillsComponent }, // Skills route
  { path: 'project', component: ContentComponent }, // Skills route
  { path: '**', redirectTo: '' } // Redirect any unknown paths to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
