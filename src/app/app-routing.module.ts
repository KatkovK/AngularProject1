
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuComponent } from './menu/menu.component';
import { MenulinckComponent } from './menulinck/menulinck.component';

const routes: Routes = [
   {path: 'main', component: MainComponent},
   {path: 'menuOne', component: MenuOneComponent},
   {path: 'menu', component: MenuComponent},
   {path: 'menulinck', component: MenulinckComponent}
];

@NgModule({
   imports: [RouterModule. forRoot(routes)],  
   exports: [RouterModule]
})

export class AppRoutingModule{}