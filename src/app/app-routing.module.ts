import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { HomeComponent } from './equipment/home/home.component';

const routes: Routes = [

  {path: 'project-info',component:ProjectInfoComponent},
  {path:'equipment',component:EquipmentComponent},
  {path:'equipment/home',component:HomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
