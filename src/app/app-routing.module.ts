import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/pages/home/home.component";
import {MainpageComponent} from "./features/pages/mainpage/mainpage.component";
import {HotelDetailsComponent} from "./features/pages/hotel-details/hotel-details.component";
import {TransportsComponent} from "./features/pages/transports/transports.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full',
  },
  {
    path: 'hotels',
    component: MainpageComponent,
  },
  {
    path: 'hotelDetails/:id',
    component: HotelDetailsComponent
  },
  {
    path: "transports/:transportsId",
    component: TransportsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
