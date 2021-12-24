import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerSearchComponent } from './buyer-search/buyer-search.component';
import { BuyernavComponent } from './buyernav/buyernav.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path : "" , redirectTo:"landing" , pathMatch : 'full'
  },
  {
    path : "landing" , component: NavigationComponent
  },
  {
    path : "buyer" , component : BuyernavComponent, 
    children: [
      {
        path: "buyer-search" , component :BuyerSearchComponent
      },
      {
        path : "" , redirectTo:"buyer-search" , pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
