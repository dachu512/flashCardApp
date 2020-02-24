import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FlashCardComponent } from './components/flash-card/flash-card.component';
import { CategoryComponent } from './components/category/category.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:  'full'
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'flashcard',
    component: FlashCardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
